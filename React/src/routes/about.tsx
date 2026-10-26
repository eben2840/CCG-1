import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/content-pages';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/about')({head:()=>pageHead('About us','Get to know Coastline Citadel Group and our research-driven, human-centered approach to consulting.'),component:AboutPage});
