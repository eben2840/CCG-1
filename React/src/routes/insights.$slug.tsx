import { createFileRoute, notFound } from '@tanstack/react-router';
import { PerspectiveArticle } from '@/components/pages/insights-page';
import { perspectives } from '@/lib/page-content';
import { pageHead } from '@/lib/site-content';
export const Route=createFileRoute('/insights/$slug')({beforeLoad:({params})=>{if(!perspectives.some(p=>p.slug===params.slug))throw notFound();},head:({params})=>{const article=perspectives.find(p=>p.slug===params.slug);return article?pageHead(article.title,article.summary):pageHead('Perspective unavailable','This perspective is not available.');},component:ArticleRoute});
function ArticleRoute(){const {slug}=Route.useParams();return <PerspectiveArticle slug={slug}/>;}
