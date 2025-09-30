import { Search, Calendar, Clock, Tag, User, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Gallery from '@/components/Gallery';
import blogFiber from '@/assets/blog-fiber.jpg';
import blogWifi from '@/assets/blog-wifi.jpg';
import blogSpeeds from '@/assets/blog-speeds.jpg';
import blogGaming from '@/assets/blog-gaming.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Choosing the Right Internet Plan: A Complete Guide for 2024",
      excerpt: "Navigate the complex world of internet plans with our comprehensive guide. Learn about speeds, data caps, and what really matters for your household.",
      category: "Guides",
      readTime: "8 min read",
      date: "March 15, 2024",
      author: "Sarah Chen",
      image: blogFiber,
      featured: true,
      tags: ["Internet Plans", "Speed", "Comparison"]
    },
    {
      id: 2,
      title: "Mesh Wi-Fi vs Traditional Routers: Which is Right for You?",
      excerpt: "Discover the key differences between mesh systems and traditional routers, and learn which option provides the best coverage for your home.",
      category: "Technology",
      readTime: "6 min read", 
      date: "March 12, 2024",
      author: "Marcus Rodriguez",
      image: blogWifi,
      featured: false,
      tags: ["Wi-Fi", "Mesh", "Routers", "Coverage"]
    },
    {
      id: 3,
      title: "Upload vs Download Speeds: What You Need to Know",
      excerpt: "Understanding the difference between upload and download speeds is crucial for choosing the right internet plan. Here's everything you need to know.",
      category: "Education",
      readTime: "5 min read",
      date: "March 10, 2024", 
      author: "Jennifer Park",
      image: blogSpeeds,
      featured: false,
      tags: ["Speed", "Upload", "Download", "Basics"]
    },
    {
      id: 4,
      title: "How to Reduce Lag for Remote Work and Gaming",
      excerpt: "Eliminate frustrating lag and latency issues with these proven techniques for optimizing your internet connection for work and play.",
      category: "Tips",
      readTime: "7 min read",
      date: "March 8, 2024",
      author: "David Kim", 
      image: blogGaming,
      featured: false,
      tags: ["Gaming", "Remote Work", "Latency", "Optimization"]
    }
  ];

  const categories = [
    { name: "All", count: 12 },
    { name: "Guides", count: 4 },
    { name: "Technology", count: 3 },
    { name: "Tips", count: 3 },
    { name: "Education", count: 2 }
  ];

  const tags = [
    "Internet Plans", "Speed", "Wi-Fi", "Fiber", "Gaming", "Remote Work", 
    "Streaming", "Business", "Installation", "Troubleshooting"
  ];

  const recentPosts = [
    { title: "5G vs Fiber: The Ultimate Comparison", date: "March 14, 2024" },
    { title: "Home Office Internet Setup Guide", date: "March 11, 2024" },
    { title: "Understanding Bandwidth Requirements", date: "March 9, 2024" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-orb opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-black text-text-primary mb-6">
                Code Spheres
                <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Blog</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Expert insights, guides, and tips to help you get the most out of your internet connection.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-12">
                <div className="glass-card overflow-hidden hover:shadow-neon transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-base/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="glass-card px-3 py-1 text-sm font-medium text-neon-orange border border-neon-orange/30">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-text-muted">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {blogPosts[0].readTime}
                      </span>
                      <span className="flex items-center"> 
                        <User className="w-4 h-4 mr-1" />
                        {blogPosts[0].author}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-text-primary mb-3 hover:text-neon-orange transition-colors">
                      <a href={`/blog/${blogPosts[0].id}`}>{blogPosts[0].title}</a>
                    </h2>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {blogPosts[0].tags.map((tag) => (
                          <span key={tag} className="glass-card px-2 py-1 text-xs text-text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline"
                        className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {blogPosts.slice(1).map((post) => (
                  <article key={post.id} className="glass-card overflow-hidden hover:shadow-neon/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx-base/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="glass-card px-2 py-1 text-xs font-medium text-neon-orange">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3 text-xs text-text-muted">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-text-primary mb-2 hover:text-neon-orange transition-colors line-clamp-2">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h3>
                      
                      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-muted">{post.author}</span>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange text-xs"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="glass-card border-glass-border">Previous</Button>
                  <Button className="neon-button">1</Button>
                  <Button variant="outline" className="glass-card border-glass-border">2</Button>
                  <Button variant="outline" className="glass-card border-glass-border">3</Button>
                  <Button variant="outline" className="glass-card border-glass-border">Next</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="glass-card p-6 mb-8">
                <h3 className="text-lg font-bold text-text-primary mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <Input 
                    placeholder="Search articles..."
                    className="pl-10 bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="glass-card p-6 mb-8">
                <h3 className="text-lg font-bold text-text-primary mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <a 
                        href={`#${category.name.toLowerCase()}`}
                        className="flex items-center justify-between text-text-secondary hover:text-neon-orange transition-colors py-1"
                      >
                        <span>{category.name}</span>
                        <span className="text-xs text-text-muted">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="glass-card p-6 mb-8">
                <h3 className="text-lg font-bold text-text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <a href="#" className="text-text-secondary hover:text-neon-orange transition-colors text-sm">
                        {post.title}
                      </a>
                      <div className="text-xs text-text-muted mt-1">{post.date}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href={`#${tag.toLowerCase().replace(' ', '-')}`}
                      className="glass-card px-3 py-1 text-xs text-text-muted hover:text-neon-orange hover:border-neon-orange transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <Gallery />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;