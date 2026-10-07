'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const services = [
  { number: '01', title: 'India entry & jurisdiction', text: 'A clear route from market intent to an operating structure that is compliant, practical, and built to scale.' },
  { number: '02', title: 'Corporate compliance', text: 'Reliable company secretarial, tax, accounting, payroll, and ongoing compliance support.' },
  { number: '03', title: 'Cross-border advisory', text: 'Connected guidance for foreign businesses navigating India and Indian businesses going global.' },
]

const insights = [
  { category: 'India entry', title: 'A practical starting point for entering the Indian market', date: '6 min read' },
  { category: 'Compliance', title: 'The operating discipline behind a resilient company', date: '8 min read' },
  { category: 'Cross-border', title: 'From incorporation to an intelligent operating model', date: '5 min read' },
]

function Logo() {
  return <a href="#top" className="logo" aria-label="AU Corporate home"><span>AU</span><strong>CORPORATE</strong></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="nav-wrap">
      <Logo />
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#approach" onClick={() => setOpen(false)}>Our approach</a>
        <a href="#insights" onClick={() => setOpen(false)}>Insights</a>
        <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>Start a conversation <ArrowRight size={15} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}

function Services() {
  return <section className="section services-section" id="services">
    <div className="section-heading"><p className="eyebrow">What we do</p><h2>Clarity for the decisions<br /><em>that move business forward.</em></h2></div>
    <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="card-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" className="text-link">Explore service <ArrowRight size={15} /></a></div></article>)}</div>
  </section>
}

function Approach() {
  return <section className="approach-section" id="approach"><div className="approach-inner"><div><p className="eyebrow gold">Our approach</p><h2>Specialist thinking.<br /><em>Practical outcomes.</em></h2></div><div className="approach-copy"><p>Business decisions across borders should feel considered, not complicated. AU Corporate brings together the right disciplines, context, and people to make the next step clear.</p><a href="#contact" className="button button-light">How we work <ArrowRight size={16} /></a></div></div><div className="approach-rule" /><div className="principles"><span>01 / Understand the whole picture</span><span>02 / Make complexity usable</span><span>03 / Build for what comes next</span></div></section>
}

function Insights() {
  return <section className="section insights-section" id="insights"><div className="insights-top"><div><p className="eyebrow">Perspectives</p><h2>Useful thinking for<br /><em>what comes next.</em></h2></div><a href="#insights" className="text-link">View all insights <ArrowRight size={15} /></a></div><div className="insight-grid">{insights.map((item, index) => <article className={index === 0 ? 'insight-card featured' : 'insight-card'} key={item.title}><div className="insight-visual"><span>AU / {String(index + 1).padStart(2, '0')}</span></div><p className="insight-category">{item.category} <span>· {item.date}</span></p><h3>{item.title}</h3><a href="#contact" className="text-link">Read insight <ArrowRight size={15} /></a></article>)}</div></section>
}

function Contact() {
  return <section className="contact-section" id="contact"><div><p className="eyebrow gold">Start a conversation</p><h2>Let's make the<br /><em>next step clear.</em></h2><p className="contact-note">Tell us a little about what you are working towards. We will connect you with the right person.</p></div><form className="inquiry-form" onSubmit={(event) => event.preventDefault()}><label>Name<input type="text" name="name" placeholder="Your name" /></label><label>Work email<input type="email" name="email" placeholder="you@company.com" /></label><label>How can we help?<textarea name="message" rows={3} placeholder="A little about your question or project" /></label><button className="button button-gold" type="submit">Send enquiry <ArrowRight size={16} /></button></form></section>
}

export default function HomePage() {
  return <><Header /><main id="top"><section className="hero"><div className="hero-content"><p className="eyebrow">Corporate advisory · India & beyond</p><h1>Make business<br /><em>move with purpose.</em></h1><p className="hero-copy">AU Corporate helps ambitious businesses navigate the decisions, structures, and obligations that make growth possible.</p><a href="#contact" className="button button-gold">Talk to AU Corporate <ArrowRight size={16} /></a></div><div className="hero-mark" aria-hidden="true"><div className="mark-ring ring-one" /><div className="mark-ring ring-two" /><span>AU</span></div><div className="hero-bottom"><span>Built for considered growth</span><span className="scroll-cue">Scroll to explore <ChevronDown size={16} /></span></div></section><Services /><Approach /><Insights /><Contact /></main><footer className="footer"><Logo /><p>Corporate advisory for businesses with somewhere to go.</p><span>© 2026 AU Corporate</span></footer></>
}
