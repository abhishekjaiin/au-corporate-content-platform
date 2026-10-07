import { desc, eq } from 'drizzle-orm'
import { getDb } from '@/lib/db'
import { articles, authors, categories } from '@/db/schema'
import { articles as fallbackArticles } from '@/lib/content'

export async function getPublishedArticles() {
  const db = getDb()
  if (!db) return fallbackArticles
  const rows = await db.select({
    slug: articles.slug,
    title: articles.title,
    excerpt: articles.excerpt,
    readingTime: articles.readingTime,
    updatedAt: articles.updatedAt,
    category: categories.name,
  }).from(articles)
    .leftJoin(categories, eq(articles.categoryId, categories.id))
    .where(eq(articles.status, 'PUBLISHED'))
    .orderBy(desc(articles.publishedAt), desc(articles.updatedAt))

  if (!rows.length) return fallbackArticles
  return rows.map(row => ({
    slug: row.slug,
    category: row.category ?? 'Insights',
    title: row.title,
    excerpt: row.excerpt ?? '',
    updated: new Intl.DateTimeFormat('en-GB', { day:'numeric', month:'long', year:'numeric' }).format(row.updatedAt ?? new Date()),
    read: `${row.readingTime ?? 5} min read`,
    headings: [],
  }))
}

export async function getPublishedArticle(slug: string) {
  const db = getDb()
  if (!db) return fallbackArticles.find(a => a.slug === slug) ?? null
  const rows = await db.select({
    article: articles,
    author: authors,
    category: categories,
  }).from(articles)
    .leftJoin(authors, eq(articles.authorId, authors.id))
    .leftJoin(categories, eq(articles.categoryId, categories.id))
    .where(eq(articles.slug, slug))

  const row = rows[0]
  if (!row || row.article.status !== 'PUBLISHED') return fallbackArticles.find(a => a.slug === slug) ?? null
  return { ...row.article, author: row.author, category: row.category }
}
