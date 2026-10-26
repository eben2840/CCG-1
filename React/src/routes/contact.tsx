import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/content-pages';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/contact')({head:()=>pageHead('Contact us','Start a conversation with Coastline Citadel Group about your organization’s goals and challenges.'),component:ContactPage});
