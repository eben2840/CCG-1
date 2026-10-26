import { ContactBand } from '@/components/site-layout';
import { WorkProcess } from '@/components/pages/work-process';
export { ContactPage } from '@/components/pages/contact-page';
import architecture from '@/assets/architecture.jpg';

export function Banner({label,title,description}:{label:string;title:string;description:string}) { return <section className="inner-banner"><div className="site-container"><p className="section-label">{label}</p><h1>{title}</h1><p>{description}</p></div></section>; }

export function AboutPage(){return <><Banner label="ABOUT COASTLINE CITADEL GROUP" title="Your partner in what’s next." description="We’re a next-generation consulting firm dedicated to helping organizations thrive in an increasingly complex and rapidly evolving world."/><section className="section site-container about-grid"><img src={architecture} width={1024} height={1024} loading="lazy" className="about-image" alt="Contemporary glass office tower"/><div><p className="section-label">CLARITY. CAPABILITY. CONFIDENCE.</p><h2 className="editorial-title">Transforming complexity<br/>into enduring opportunity.</h2><p className="body-copy">Coastline Citadel Group partners with the world’s leading organizations to translate complexity into enduring opportunity. By integrating deep domain mastery with an objective and highly tailored consulting approach, we empower leadership teams to make decisive, future-proof strategic choices.</p><p className="body-copy">Our approach is defined by curiosity, integrity, and an unwavering commitment to excellence. We believe in elevating people, strengthening institutions, and designing systems that stand the test of time.</p></div></section><WorkProcess/><ContactBand/></>;}

