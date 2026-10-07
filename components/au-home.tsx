'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const contentModels = [
  { label: 'Service pages', detail: 'Structured guides with requirements, process, compliance, FAQs, and inquiry paths.' },
  { label: 'India entry & jurisdictions', detail: 'Reusable country and jurisdiction templates for market-entry decisions.' },
  { label: 'Knowledge & articles', detail: 'Author-led insight with categories, clusters, keywords, and SEO metadata.' },
]

const foundationItems = ['Authors & profiles', 'Categories & topic clusters', 'SEO metadata & internal links', 'Publishing workflow & review', 'Country and industry variations', 'Inquiry forms & consultation CTAs']

function BrandMark() {
  return <div className="flex items-center gap-3" aria-label="AU Corporate">
    <div className="flex h-10 w-10 items-center justify-center border border-[#b9975b] bg-[#071b36] text-lg font-bold tracking-[-0.08em] text-[#d6b77a]">AU</div>
    <div className="leading-none"><div className="text-[15px] font-semibold tracking-[0.18em] text-[#071b36]">AU CORPORATE</div><div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8a7652]">Content platform</div></div>
  </div>
}

export function AuHome() {
  const [open, setOpen] = useState(false)
  return <main className="min-h-screen bg-[#fbfaf7] text-[#122036]">
    <header className="border-b border-[#dedbd2] bg-white/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <BrandMark />
        <nav className="hidden items-center gap-8 text-sm text-[#4e5968] md:flex" aria-label="Main navigation">
          <a href="#architecture" className="transition-colors hover:text-[#071b36]">Architecture</a>
          <a href="#content" className="transition-colors hover:text-[#071b36]">Content models</a>
          <a href="#foundation" className="transition-colors hover:text-[#071b36]">Foundation</a>
          <a href="#contact" className="border border-[#b9975b] px-5 py-3 font-medium text-[#071b36] transition-colors hover:bg-[#b9975b]/10">Start a conversation <ArrowRight className="ml-2 inline h-4 w-4" /></a>
        </nav>
        <button className="rounded-sm p-2 text-[#071b36] md:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-[#dedbd2] px-6 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm"><a href="#architecture" onClick={() => setOpen(false)}>Architecture</a><a href="#content" onClick={() => setOpen(false)}>Content models</a><a href="#foundation" onClick={() => setOpen(false)}>Foundation</a></div></nav>}
    </header>

    <section className="relative overflow-hidden border-b border-[#dedbd2] bg-[#071b36] text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(120deg, transparent 0 48%, #d6b77a 48.2% 48.5%, transparent 48.7%), linear-gradient(30deg, transparent 0 72%, #d6b77a 72.2% 72.5%, transparent 72.7%)' }} />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32">
        <div><p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6b77a]">AU Corporate / Digital foundation</p><h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl">A clearer way to navigate complex business decisions.</h1><p className="mt-8 max-w-xl text-lg leading-8 text-[#d7dde5]">A structured content platform for authoritative guidance on India entry, corporate compliance, and the decisions that follow.</p><div className="mt-10 flex flex-wrap gap-4"><a href="#content" className="bg-[#c6a668] px-6 py-4 text-sm font-semibold text-[#071b36] hover:bg-[#d6b77a]">Explore the platform <ArrowRight className="ml-3 inline h-4 w-4" /></a><a href="#architecture" className="border border-white/30 px-6 py-4 text-sm font-semibold text-white hover:border-white">View the architecture</a></div></div>
        <div className="flex items-end"><div className="w-full border-l border-[#c6a668] pl-7"><p className="text-sm uppercase tracking-[0.18em] text-[#d6b77a]">Designed for continuity</p><p className="mt-5 text-2xl leading-10 text-white">Every page has a clear purpose, a consistent structure, and a path to the next useful decision.</p></div></div>
      </div>
    </section>

    <section id="architecture" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3e]">01 / Information architecture</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-[#071b36]">Built around the questions decision-makers actually ask.</h2></div><div className="grid gap-5 sm:grid-cols-3"><div className="border-t-2 border-[#b9975b] pt-5"><p className="text-3xl font-medium text-[#071b36]">01</p><p className="mt-3 font-semibold">Orient</p><p className="mt-2 text-sm leading-6 text-[#68717e]">A concise executive answer before the detail.</p></div><div className="border-t-2 border-[#b9975b] pt-5"><p className="text-3xl font-medium text-[#071b36]">02</p><p className="mt-3 font-semibold">Understand</p><p className="mt-2 text-sm leading-6 text-[#68717e]">Structured explanation, requirements, process, and risks.</p></div><div className="border-t-2 border-[#b9975b] pt-5"><p className="text-3xl font-medium text-[#071b36]">03</p><p className="mt-3 font-semibold">Act</p><p className="mt-2 text-sm leading-6 text-[#68717e]">A relevant inquiry path and connected resources.</p></div></div></div></section>

    <section id="content" className="border-y border-[#dedbd2] bg-white"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3e]">02 / Reusable content models</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-[#071b36]">One system. Many useful entry points.</h2><p className="mt-5 leading-7 text-[#68717e]">The platform is being shaped as a flexible foundation rather than a collection of isolated pages. Each model can evolve without losing the consistency users rely on.</p></div><div className="mt-14 divide-y divide-[#dedbd2] border-y border-[#dedbd2]">{contentModels.map((item, index) => <article key={item.label} className="grid gap-4 py-7 md:grid-cols-[90px_0.65fr_1fr] md:items-center"><span className="text-sm text-[#9b7b3e]">0{index + 1}</span><h3 className="text-xl font-semibold text-[#071b36]">{item.label}</h3><p className="max-w-lg text-sm leading-6 text-[#68717e]">{item.detail}</p></article>)}</div></div></section>

    <section id="foundation" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3e]">03 / Platform foundation</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-[#071b36]">Ready for a disciplined publishing workflow.</h2><p className="mt-5 max-w-md leading-7 text-[#68717e]">A modular architecture gives future editors, authors, and developers clear building blocks to work with as the content library grows.</p></div><div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">{foundationItems.map((item, index) => <div key={item} className="flex items-center gap-4 border-b border-[#dedbd2] py-5"><span className="text-xs text-[#b9975b]">{String(index + 1).padStart(2, '0')}</span><span className="text-sm font-medium text-[#26364a]">{item}</span></div>)}</div></div></section>

    <section id="contact" className="bg-[#f1eee7]"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3e]">A considered next step</p><h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-[#071b36]">Build trust through useful, well-structured information.</h2></div><a href="mailto:hello@aucorporate.com" className="shrink-0 bg-[#071b36] px-6 py-4 text-sm font-semibold text-white hover:bg-[#10294a]">Discuss the platform <ArrowRight className="ml-3 inline h-4 w-4" /></a></div></section>
    <footer className="bg-[#071b36] px-6 py-8 text-sm text-[#b9c2ce]"><div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:px-4"><span>© {new Date().getFullYear()} AU Corporate. Content platform foundation.</span><span className="text-[#d6b77a]">Professional clarity, built to scale.</span></div></footer>
  </main>
}

export default AuHome

function _unused() { return <ChevronDown aria-hidden="true" className="hidden" /> }
