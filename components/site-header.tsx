'use client'
import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
export default function SiteHeader(){
 const [open,setOpen]=useState(false)
 const close=()=>setOpen(false)
 return <header className="site-header">
  <div className="nav-wrap">
   <a href="/" className="logo" aria-label="AU Corporate home"><span>AU</span><strong>CORPORATE</strong></a>
   <nav className={open?'nav-links is-open':'nav-links'} aria-label="Main navigation">
    <a href="/services" onClick={close}>Practice</a>
    <a href="/india-entry" onClick={close}>India Entry</a>
    <a href="/insights" onClick={close}>Insights</a>
    <a href="/about" onClick={close}>The Firm</a>
    <a href="/#contact" className="nav-contact" onClick={close}>Start a conversation <ArrowRight size={15}/></a>
   </nav>
   <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
  </div>
 </header>
}
