import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import PageHero from '@/components/page-hero'
import { getPublishedArticles } from '@/lib/articles'

export const dynamic = 'force-dynamic'

export default async function InsightsPage(){
  const articles = await getPublishedArticles()
  return <><SiteHeader/><main><PageHero eyebrow="Knowledge & insights" title={<>Practical thinking for <em>India operations.</em></>}><p>Original guides, explainers and practical notes for international businesses establishing and operating in India.</p></PageHero><section className="section"><div className="insight-list">{articles.map((a:any,i:number)=><article key={a.slug} className="insight-list-row"><span>0{i+1}</span><div><p className="eyebrow">{a.category} · {a.read}</p><h2>{a.title}</h2><p>{a.excerpt}</p><Link href={'/insights/'+a.slug} className="text-link">Read article →</Link></div><time>{a.updated}</time></article>)}</div></section><SiteFooter/></main></>
}