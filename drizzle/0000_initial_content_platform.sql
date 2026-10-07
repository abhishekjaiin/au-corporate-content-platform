CREATE TABLE IF NOT EXISTS authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  bio text,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS topic_clusters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text
);

CREATE TABLE IF NOT EXISTS keywords (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword text NOT NULL UNIQUE,
  intent text
);

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  excerpt text,
  status text NOT NULL DEFAULT 'DRAFT',
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  author_id uuid REFERENCES authors(id) ON DELETE SET NULL,
  topic_cluster_id uuid REFERENCES topic_clusters(id) ON DELETE SET NULL,
  content jsonb NOT NULL DEFAULT '{"sections":[],"faqs":[]}'::jsonb,
  seo_title text,
  seo_description text,
  canonical_url text,
  featured_image text,
  reading_time integer DEFAULT 5,
  scheduled_at timestamptz,
  published_at timestamptz,
  is_featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS articles_status_idx ON articles(status);
CREATE INDEX IF NOT EXISTS articles_category_idx ON articles(category_id);
CREATE INDEX IF NOT EXISTS articles_updated_idx ON articles(updated_at);

CREATE TABLE IF NOT EXISTS article_keywords (
  article_id uuid NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  keyword_id uuid NOT NULL REFERENCES keywords(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, keyword_id)
);

CREATE TABLE IF NOT EXISTS article_relations (
  article_id uuid NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  related_article_id uuid NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, related_article_id)
);
