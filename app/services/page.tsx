import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import PageHero from '@/components/page-hero'
import { services } from '@/lib/content'
import { ArrowRight } from 'lucide-react'
export default function ServicesPage(){
 return <><SiteHeader/><main>
  <PageHero eyebrow="The practice" title={<>Practical advice for the <em>India lifecycle.</em></>}><p>AU Corporate brings connected disciplines together for businesses entering, establishing and operating in India. Each practice can stand alone or form part of a wider engagement.</p></PageHero>
  <section className="section"><div className="section-heading"><p className="eyebrow">Our practice</p><h2>One operating picture.<br/><em>Relevant specialists.</em></h2></div><div className="service-list">{services.map(s=><article className="service-row" key={s.slug}><span className="card-number">{s.number}</span><div><p className="eyebrow">Practice</p><h3>{s.title}</h3><p>{s.summary}</p><Link className="text-link" href={'/services/'+s.slug}>Explore practice <ArrowRight size={15}/></Link></div><div className="service-side"><strong>Often relevant to</strong>{s.bestFor.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>
  <section className="approach-section"><div className="approach-inner"><div><p className="eyebrow gold">How we work</p><h2>From decision to <em>operation.</em></h2></div><div className="approach-copy"><p>We start with the commercial objective, then connect structure, tax, finance and compliance decisions so that the India setup works beyond incorporation.</p><Link href="/#contact" className="button button-light">Start a conversation <ArrowRight size={16}/></Link></div></div></section>
 </main><SiteFooter/></>
}
