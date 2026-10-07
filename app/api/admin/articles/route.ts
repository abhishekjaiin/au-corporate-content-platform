import { NextResponse } from 'next/server'
import { desc, eq } from 'drizzle-orm'
import { getDb } from '@/lib/db'
import { articles, categories } from '@/db/schema'

export async function GET() {
  const db = getDb()
  if (!db) return NextResponse.json({ error: 'DATABASE_URL is not configured' }, { status: 503 })
  const rows = await db.select({ article: articles, category: categories })
    .from(articles).leftJoin(categories, eq(articles.categoryId, categories.id))
    .orderBy(desc(articles.updatedAt))
  return NextResponse.json(rows)
}

export async function POST(request: Request) {
  const db = getDb()
  if (!db) return NextResponse.json({ error: 'DATABASE_URL is not configured' }, { status: 503 })
  const body = await request.json()
  if (!body.title || !body.slug) return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 })
  const [created] = await db.insert(articles).values({
    title: body.title,
    slug: body.slug,
    excerpt: body.excerpt ?? '',
    status: body.status ?? 'DRAFT',
    content: body.content ?? { sections: [], faqs: [] },
    seoTitle: body.seoTitle ?? null,
    seoDescription: body.seoDescription ?? null,
    readingTime: Number(body.readingTime ?? 5),
  }).returning()
  return NextResponse.json(created, { status: 201 })
}
