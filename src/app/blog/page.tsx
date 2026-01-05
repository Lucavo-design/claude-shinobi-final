import { GET_BLOG_POSTS } from '@/lib/queries'
import { BlogPost } from '@/lib/types'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import Avatar from '@/components/ui/Avatar/Avatar'

// Mock data for when Hygraph endpoint is not configured
const mockPosts: BlogPost[] = [
  {
    id: '1',
    blogTitle: 'Getting Started with Next.js 15',
    blogPostSlug: 'getting-started-nextjs-15',
    blogPostContent: {
      html: '<p>Next.js 15 brings exciting new features including Turbopack for faster builds, improved server components, and better developer experience. Learn how to set up your first project and explore the new App Router.</p>'
    },
    createdAt: new Date().toISOString(),
    createdBy: { name: 'Shinobi Dev' }
  },
  {
    id: '2',
    blogTitle: 'Mastering React Server Components',
    blogPostSlug: 'mastering-react-server-components',
    blogPostContent: {
      html: '<p>Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance. This guide covers best practices and common patterns.</p>'
    },
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    createdBy: { name: 'Shinobi Dev' }
  },
  {
    id: '3',
    blogTitle: 'Styling with Tailwind CSS v4',
    blogPostSlug: 'styling-tailwind-css-v4',
    blogPostContent: {
      html: '<p>Tailwind CSS v4 introduces a new engine, native CSS variables, and improved performance. Discover how to leverage these features in your Next.js applications.</p>'
    },
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    createdBy: { name: 'Shinobi Dev' }
  }
]

async function getPosts(): Promise<BlogPost[]> {
  // Return mock data if Hygraph endpoint is not configured
  if (!process.env.HYGRAPH_ENDPOINT) {
    return mockPosts
  }

  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_BLOG_POSTS,
    }),
    next: { revalidate: 3600 }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`)
  }

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.blogPosts
}

function getPreviewText(html: string, maxLength: number = 100): string {
  // Strip HTML tags and decode HTML entities
  const textContent = html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim()
  
  if (textContent.length <= maxLength) {
    return textContent
  }
  
  return textContent.substring(0, maxLength).trim() + '...'
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group mb-4 p-6 bg-surface rounded-lg shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <Link href={`/blog/${post.blogPostSlug}`} className="block">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
              {post.blogTitle}
            </h2>
            <p className="text-sm text-muted/70 leading-relaxed mb-4">
              {getPreviewText(post.blogPostContent.html, 300)}
            </p>
            <div className="flex items-center text-sm text-muted">
              <div className="flex items-center space-x-2">
                <Avatar name={post.createdBy.name} size="md" />
                <span>By {post.createdBy.name}</span>
              </div>
              <span className="mx-3">•</span>
              <time className="text-muted">{new Date(post.createdAt).toLocaleDateString()}</time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-secondary">
              Blog Posts
            </h1>
            <div className="max-w-2xl mx-auto">

              <p className="text-base text-muted/80">
                Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipiscing elit, cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
    
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* Main Content Section */}
      <div className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Blog Posts - Left Two Thirds */}
            <div className="lg:col-span-2">
              {posts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-xl text-muted mb-2">No blog posts found</p>
                  <p className="text-muted/70">Check back later for new content!</p>
                </div>
              ) : (
                <div className="space-y-0">
                  {posts.map((post, index) => (
                    <div key={post.id} className={index > 0 ? "pt-4" : ""}>
                      <BlogPostCard post={post} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar - Right Third */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}