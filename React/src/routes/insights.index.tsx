import { createFileRoute } from '@tanstack/react-router';
import { InsightsPage } from '@/components/pages/insights-page';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/insights/')({head:()=>pageHead('Insights','Explore Coastline Citadel Group perspectives on strategy, transformation, and collaborative progress.'),component:InsightsPage});
