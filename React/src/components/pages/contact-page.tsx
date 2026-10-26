import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import team from '@/assets/consulting-team.jpg';

export function ContactPage() {
  const [ready, setReady] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const company = String(data.get('company') ?? '');
    const message = String(data.get('message') ?? '');
    window.location.href = `mailto:info@ccitadelgroup.com?subject=${encodeURIComponent(`Consulting enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`)}`;
    setReady(true);
  }
  return <section className="contact-page">
    <div className="site-container">
      <header className="contact-intro">
        <div><p className="section-label">LET’S TALK</p><h1>The next move starts<br/>{' '}with a conversation<span>.</span></h1></div>
        <p>Tell us what’s on your horizon. We’d love to explore how we can help your organization move forward.</p>
      </header>
      <div className="contact-workspace">
        <aside className="contact-aside">
          <div className="contact-aside-content">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Big questions.<br/>A good place to start.</h2>
            <div className="contact-method"><Mail size={20} strokeWidth={1.5}/><div><h3>Email us</h3><a href="mailto:info@ccitadelgroup.com">info@ccitadelgroup.com <ArrowUpRight size={15}/></a></div></div>
            <div className="contact-method"><MapPin size={20} strokeWidth={1.5}/><div><h3>Find us</h3><p>30 N Gould St, Suite R<br/>Sheridan, WY 82801</p><a href="https://maps.app.goo.gl/vLQvYJbg2VozJMNP8" target="_blank" rel="noreferrer">View on map <ArrowUpRight size={15}/></a></div></div>
          </div>
          <img src={team} width={1536} height={1024} alt="Consulting colleagues working together around a table" className="contact-team-image"/>
        </aside>
        <form className="contact-form enquiry-form" onSubmit={submit} onChange={() => setReady(false)}>
          <div className="enquiry-heading"><h2>What’s on your horizon?</h2><span>* Required fields</span></div>
          <div className="enquiry-name-row">
            <div><label className="field-label" htmlFor="name">Your name *</label><input id="name" name="name" className="form-field" placeholder="Full name" required autoComplete="name"/></div>
            <div><label className="field-label" htmlFor="email">Work email *</label><input id="email" name="email" type="email" className="form-field" placeholder="you@company.com" required autoComplete="email"/></div>
          </div>
          <div><label className="field-label" htmlFor="company">Organization</label><input id="company" name="company" className="form-field" placeholder="Company name" autoComplete="organization"/></div>
          <div><label className="field-label" htmlFor="message">How can we help? *</label><textarea id="message" name="message" className="form-field" rows={5} placeholder="Tell us about your goals or challenges…" required/></div>
          <div className="enquiry-submit"><p>Your enquiry will open in your email app, ready to send.</p><Button size="xl" type="submit">Prepare your enquiry <ArrowUpRight/></Button></div>
          {ready && <p role="status" className="enquiry-status"><Check size={18}/>Your enquiry is ready in your email app. Send it there to reach our team.</p>}
        </form>
      </div>
    </div>
  </section>;
}