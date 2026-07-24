import { posts, getPost } from '@/content/insights';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'CyberXSolutions field notes';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  return renderOgImage({
    eyebrow: post?.category ?? 'Field notes',
    title: post?.title ?? 'Field notes from production AI',
    lead: post?.excerpt,
    accent: post?.accent ?? 'blue',
    stats: post ? [{ value: post.readTime.replace(' read', ''), label: 'Read time' }] : undefined,
  });
}
