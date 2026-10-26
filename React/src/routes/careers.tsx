import { createFileRoute } from '@tanstack/react-router';
import { CareersPage } from '@/components/pages/careers-page';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/careers')({head:()=>pageHead('Careers','Grow your career with Coastline Citadel Group and make a meaningful impact through consulting.'),component:CareersPage});
