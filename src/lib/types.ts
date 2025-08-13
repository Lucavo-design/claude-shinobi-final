// Type definitions for blog-related data

export interface BlogPost {
  id: string
  blogPostSlug: string
  blogTitle: string
  createdAt: string
  createdBy: {
    name: string
  }
  blogPostContent: {
    html: string
  }
}