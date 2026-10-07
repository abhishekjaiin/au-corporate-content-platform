import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { getDb } from '@/lib/db'
import { articles } from '@/db/schema'

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb()
  if (!db) return NextResponse.json({ error: 'DATABASE_URL is not configured' }, { status: 503 })
  const { id } = await params
  const [row] = await db.select().from(articles).where(eq(articles.id, id))
  return row ? NextResponse.json(row) : NextResponse.json({ error: 'Article not found' }, { status: 404 })
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb()
  if (!db) return NextResponse.json({ error: 'DATABASE_URL is not configured' }, { status: 503 })
  const { id } = await params
  const body = await request.json()
  const [updated] = await db.update(articles).set({
    title: body.title,
    slug: body.slug,
    excerpt: body.excerpt,
    status: body.status,
    content: body.content,
    seoTitle: body.seoTitle,
    seoDescription: body.seoDescription,
    readingTime: Number(body.readingTime ?? 5),
    updatedAt: new Date(),
    publishedAt: body.status === 'PUBLISHED' ? new Date() : undefined,
  }).where(eq(articles.id, id)).returning()
  return updated ? NextResponse.json(updated) : NextResponse.json({ error: 'Article not found' }, { status: 404 })
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const db = getDb()
  if (!db) return NextResponse.json({ error: 'DATABASE_URL is not configured' }, { status: 503 })
  const { id } = await params
  await db.delete(articles).where(eq(articles.id, id))
  return NextResponse.json({ ok: true })
}
