import { sanitizeHTML } from '@/lib/sanitize'
import { GET_SINGLE_POST } from '@/lib/queries'
import { BlogPost } from '@/lib/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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
  params: { slug: string } 
}) {
  const post = await getSinglePost(params.slug)

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
          <div className="text-lg text-gray-600 dark:text-gray-400">
            By {post.createdBy.name} • {new Date(post.createdAt).toLocaleDateString()}
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