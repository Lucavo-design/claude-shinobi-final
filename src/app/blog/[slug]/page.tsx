import { sanitizeHTML } from '@/lib/sanitize'
import { GET_SINGLE_POST } from '@/lib/queries'
import { BlogPost } from '@/lib/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Avatar from '@/components/ui/Avatar/Avatar'
import styles from './BlogPost.module.css'

async function getSinglePost(slug: string): Promise<BlogPost | null> {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_SINGLE_POST,
      variables: { slug }
    }),
    next: { revalidate: 3600 }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`)
  }

  const json = await response.json()
  
  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.blogPost
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getSinglePost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {post.blogTitle}
          </h1>
          <div className="flex items-center gap-3 text-lg text-gray-600 dark:text-gray-400">
            <Avatar name={post.createdBy.name} size="lg" />
            <div>
              <div>By {post.createdBy.name}</div>
              <div className="text-sm">{new Date(post.createdAt).toLocaleDateString()}</div>
            </div>
          </div>
        </header>
        
        <div 
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.blogPostContent.html) }}
        />
      </article>
      
      <div className="mt-12 pt-8 border-t border-border">
        <Link 
          href="/blog" 
          className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent text-muted hover:text-primary transition-colors duration-200 hover:bg-primary/5 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  )
}