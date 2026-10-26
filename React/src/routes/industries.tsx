import { createFileRoute } from '@tanstack/react-router';
import { IndustriesPage } from '@/components/pages/industries-page';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/industries')({validateSearch:(search:Record<string,unknown>):{focus?:string}=>typeof search['focus']==='string'?{focus:search['focus']}:{},head:()=>pageHead('Industries','Explore consulting expertise across financial services, healthcare, infrastructure, manufacturing, and more.'),component:IndustriesRoute});
function IndustriesRoute(){const {focus}=Route.useSearch();return focus ? <IndustriesPage key={focus} focus={focus}/> : <IndustriesPage/>;}
