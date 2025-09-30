import { Calendar, Clock, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blogFiber from '@/assets/blog-fiber.jpg';
import blogWifi from '@/assets/blog-wifi.jpg';
import blogSpeeds from '@/assets/blog-speeds.jpg';
import blogGaming from '@/assets/blog-gaming.jpg';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Choosing the Right Internet Plan: A Complete Guide for 2024",
      excerpt: "Navigate the complex world of internet plans with our comprehensive guide. Learn about speeds, data caps, and what really matters for your household.",
      category: "Guides",
      readTime: "8 min read",
      date: "March 15, 2024",
      image: blogFiber,
      featured: true
    },
    {
      id: 2,
      title: "Mesh Wi-Fi vs Traditional Routers: Which is Right for You?",
      excerpt: "Discover the key differences between mesh systems and traditional routers, and learn which option provides the best coverage for your home.",
      category: "Technology",
      readTime: "6 min read",
      date: "March 12, 2024",
      image: blogWifi,
      featured: false
    },
    {
      id: 3,
      title: "Upload vs Download Speeds: What You Need to Know",
      excerpt: "Understanding the difference between upload and download speeds is crucial for choosing the right internet plan.",
      category: "Education",
      readTime: "5 min read",
      date: "March 10, 2024",
      image: blogSpeeds,
      featured: false
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Latest
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Insights</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Stay informed with expert guides, tips, and industry insights to get the most out of your internet connection.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`glass-card overflow-hidden hover:shadow-neon/30 transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-video' : 'aspect-[4/3]'}`}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-base/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 text-sm font-medium text-neon-orange border border-neon-orange/30">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex items-center space-x-3 mb-3 text-sm text-text-muted">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className={`font-bold text-text-primary mb-3 hover:text-neon-orange transition-colors line-clamp-2 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-lg'
                }`}>
                  <a href="/blog">{post.title}</a>
                </h3>
                
                <p className={`text-text-secondary mb-4 line-clamp-3 ${
                  index === 0 ? 'text-base lg:text-lg' : 'text-sm'
                }`}>
                  {post.excerpt}
                </p>
                
                <a 
                  href={`/blog/post-${post.id}`}
                  className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange inline-flex items-center cursor-pointer px-4 py-2 rounded-md border text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center space-y-4">
          <a 
            href="/blog"
            className="neon-button inline-flex items-center mr-4 cursor-pointer h-11 rounded-md px-8 py-2 text-sm font-medium"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          
                    <Button 
            asChild 
            variant="outline" 
            className="glass-card hover:glass-border border-neon-orange/30 hover:border-neon-orange transition-all duration-300"
          >
            <a 
              href="tel:+18776549321"
              className="flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Expert Advice: +1(877) 654-9321
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;