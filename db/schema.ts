import { pgTable, text, timestamp, uuid, jsonb, integer, boolean, index } from 'drizzle-orm/pg-core'

export const articleStatus = ['IDEA','DRAFT','REVIEW','APPROVED','SCHEDULED','PUBLISHED','NEEDS_REFRESH'] as const
export type ArticleStatus = typeof articleStatus[number]

export type ArticleSection = {
  heading: string
  paragraphs: string[]
  callout?: { title: string; text: string }
}

export type ArticleFaq = { question: string; answer: string }

export const authors = pgTable('authors', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  role: text('role'),
  bio: text('bio'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
})

export const topicClusters = pgTable('topic_clusters', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
})

export const keywords = pgTable('keywords', {
  id: uuid('id').defaultRandom().primaryKey(),
  keyword: text('keyword').notNull().unique(),
  intent: text('intent'),
})

export const articles = pgTable('articles', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  status: text('status', { enum: articleStatus }).default('DRAFT').notNull(),
  categoryId: uuid('category_id').references(() => categories.id, { onDelete: 'set null' }),
  authorId: uuid('author_id').references(() => authors.id, { onDelete: 'set null' }),
  topicClusterId: uuid('topic_cluster_id').references(() => topicClusters.id, { onDelete: 'set null' }),
  content: jsonb('content').$type<{ sections: ArticleSection[]; faqs: ArticleFaq[] }>().notNull().default({ sections: [], faqs: [] }),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  canonicalUrl: text('canonical_url'),
  featuredImage: text('featured_image'),
  readingTime: integer('reading_time').default(5),
  scheduledAt: timestamp('scheduled_at', { withTimezone: true }),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  isFeatured: boolean('is_featured').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  index('articles_status_idx').on(table.status),
  index('articles_category_idx').on(table.categoryId),
  index('articles_updated_idx').on(table.updatedAt),
])

export const articleKeywords = pgTable('article_keywords', {
  articleId: uuid('article_id').notNull().references(() => articles.id, { onDelete: 'cascade' }),
  keywordId: uuid('keyword_id').notNull().references(() => keywords.id, { onDelete: 'cascade' }),
})

export const articleRelations = pgTable('article_relations', {
  articleId: uuid('article_id').notNull().references(() => articles.id, { onDelete: 'cascade' }),
  relatedArticleId: uuid('related_article_id').notNull().references(() => articles.id, { onDelete: 'cascade' }),
})
