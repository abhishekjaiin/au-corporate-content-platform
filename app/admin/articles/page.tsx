import Link from 'next/link'
import { desc, eq } from 'drizzle-orm'
import { getDb } from '@/lib/db'
import { articles, categories } from '@/db/schema'

export const dynamic = 'force-dynamic'

export default async function ArticlesAdmin(){
  const db=getDb()
  const rows=db ? await db.select({article:articles,category:categories}).from(articles).leftJoin(categories,eq(articles.categoryId,categories.id)).orderBy(desc(articles.updatedAt)) : []
  return <main className="admin-shell"><header className="admin-top"><div><p className="eyebrow gold">Content operations</p><h1>Articles</h1><p className="admin-sub">Create and manage structured articles through the editorial workflow.</p></div><div className="admin-actions"><Link href="/admin" className="text-link">← Dashboard</Link><Link href="/admin/articles/new" className="button button-gold">New article</Link></div></header><section className="admin-list">{!db&&<div className="admin-empty"><strong>Database not connected.</strong><p>Configure DATABASE_URL and run the initial migration before using persistent article storage.</p></div>}{db&&!rows.length&&<div className="admin-empty"><strong>No articles yet.</strong><p>Create the first article to start the editorial workflow.</p></div>}{rows.map((row:any)=><article className="admin-list-row" key={row.article.id}><div><p className="eyebrow">{row.article.status} · {row.category?.name ?? 'Uncategorised'}</p><h2>{row.article.title}</h2><p>{row.article.excerpt}</p></div><Link className="text-link" href={`/admin/articles/${row.article.id}`}>Edit →</Link></article>)}</section></main>
}
