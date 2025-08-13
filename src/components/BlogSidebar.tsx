export default function BlogSidebar() {
  return (
    <div className="sticky top-8 space-y-8">
      {/* About Section */}
      <div className="pb-8 border-b border-border">
        <h3 className="text-xl font-bold mb-4 text-foreground">About This Blog</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          Welcome to our blog where we share insights, tutorials, and thoughts on modern web development, design, and technology trends.
        </p>
        <p className="text-muted/80 text-sm">
          Stay tuned for regular updates and deep dives into the latest in tech.
        </p>
      </div>

      {/* Categories */}
      <div className="pb-8 border-b border-border">
        <h3 className="text-xl font-bold mb-4 text-foreground">Categories</h3>
        <div className="space-y-2">
          {['Web Development', 'Design', 'JavaScript', 'React', 'CSS', 'Performance'].map((category) => (
            <div key={category} className="flex items-center justify-between">
              <span className="text-muted text-sm hover:text-primary cursor-pointer transition-colors">
                {category}
              </span>
              <span className="text-xs text-muted/60 bg-primary/10 px-2 py-1 rounded-full">
                {Math.floor(Math.random() * 12) + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="pb-8 border-b border-border">
        <h3 className="text-xl font-bold mb-4 text-foreground">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New post published', time: '2 hours ago' },
            { action: 'Comment on "React Tips"', time: '1 day ago' },
            { action: 'Post updated', time: '3 days ago' },
            { action: 'New subscriber', time: '1 week ago' }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-muted">{item.action}</p>
                <p className="text-xs text-muted/60">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-foreground">Stay Updated</h3>
        <p className="text-muted text-sm mb-4">
          Subscribe to our newsletter for the latest posts and updates.
        </p>
        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
          />
          <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}