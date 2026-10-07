import Link from 'next/link'

export default function ArticlesAdmin(){
  return <main className="admin-shell"><header className="admin-top"><div><p className="eyebrow gold">Content operations</p><h1>Articles</h1><p className="admin-sub">Create and manage structured articles through the editorial workflow.</p></div><div className="admin-actions"><Link href="/admin" className="text-link">← Dashboard</Link><Link href="/admin/articles/new" className="button button-gold">New article</Link></div></header><section className="admin-list"><p className="admin-sub">Persistent article records are available through the database API. The editor opens from each article record.</p><ArticleList/></section></main>
}

async function ArticleList(){
  const base = process.env.NEXT_PUBLIC_APP_URL ?? ''
  let rows:any[]=[]
  try{const res=await fetch(`${base}/api/admin/articles`,{cache:'no-store'});if(res.ok)rows=await res.json()}catch{}
  if(!rows.length)return <div className="admin-empty"><strong>No database articles yet.</strong><p>Configure DATABASE_URL and run the migration, then create your first article.</p></div>
  return <div>{rows.map((row:any)=><article className="admin-list-row" key={row.article.id}><div><p className="eyebrow">{row.article.status} · {row.category?.name ?? 'Uncategorised'}</p><h2>{row.article.title}</h2><p>{row.article.excerpt}</p></div><Link className="text-link" href={`/admin/articles/${row.article.id}`}>Edit →</Link></article>)}</div>
}
