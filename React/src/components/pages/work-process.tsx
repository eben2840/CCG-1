import { useState } from 'react';
import { ArrowDownRight, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { approach } from '@/lib/site-content';

export function WorkProcess() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="section work-section">
    <div className="site-container work-layout">
      <div className="work-intro">
        <p className="section-label">HOW WE WORK</p>
        <h2 className="editorial-title">From first insight<br/>to lasting impact.</h2>
        <div className="work-motif" aria-hidden="true"><span>Insight</span><ArrowDownRight size={64} strokeWidth={1}/><span>Impact</span></div>
        <p className="work-caption">Clarity. Capability. Confidence.</p>
      </div>
      <div className="work-steps">
        {approach.map(([title, body], i) => <div className="work-step" data-open={active === i} key={title}>
          <h3><Button variant="ghost" className="work-trigger grid! whitespace-normal! justify-stretch!" onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i} aria-controls={`work-panel-${i}`} id={`work-trigger-${i}`}>
            <span className="work-number">0{i + 1}</span><span className="work-step-title">{title}</span><span className="work-toggle">{active === i ? <Minus size={18}/> : <Plus size={18}/>}</span>
          </Button></h3>
          <div id={`work-panel-${i}`} role="region" aria-labelledby={`work-trigger-${i}`} hidden={active !== i} className="work-panel"><p>{body}</p></div>
        </div>)}
      </div>
    </div>
  </section>;
}