// GraphQL queries for blog posts

export const GET_BLOG_POSTS = `
  query Posts {
    blogPosts {
      blogTitle
      blogPostSlug
      createdAt
      createdBy {
        name
      }
      id
      blogPostContent {
        html
      }
    }
  }
`

export const GET_SINGLE_POST = `
  query GetSinglePost($slug: String!) {
    blogPost(where: { blogPostSlug: $slug }) {
      blogTitle
      blogPostSlug
      createdAt
      createdBy {
        name
      }
      id
      blogPostContent {
        html
      }
    }
  }
`