import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/pages/services-page';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/services')({validateSearch:(search:Record<string,unknown>):{focus?:string}=>typeof search['focus']==='string'?{focus:search['focus']}:{},head:()=>pageHead('Our services','Explore consulting services in strategy, risk, transformation, AI, technology, operations, and sustainability.'),component:ServicesRoute});
function ServicesRoute(){const {focus}=Route.useSearch();return focus ? <ServicesPage key={focus} focus={focus}/> : <ServicesPage/>;}
