import { useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    '1': {
      title: "Choosing the Right Internet Plan: A Complete Guide for 2024",
      content: `
        <p>In today's digital world, having the right internet plan is crucial for everything from remote work to streaming entertainment. With so many options available, choosing the perfect plan can feel overwhelming. This comprehensive guide will help you navigate the complex world of internet plans and find the perfect fit for your needs.</p>

        <h2>Understanding Internet Speeds</h2>
        <p>Internet speed is measured in megabits per second (Mbps), and it determines how quickly you can download or upload data. Here's what different speeds mean for your daily activities:</p>

        <ul>
          <li><strong>25-50 Mbps:</strong> Perfect for basic browsing, email, and streaming on 1-2 devices</li>
          <li><strong>100-200 Mbps:</strong> Ideal for families with multiple devices, 4K streaming, and light gaming</li>
          <li><strong>300-500 Mbps:</strong> Great for heavy usage, multiple 4K streams, and large file downloads</li>
          <li><strong>1 Gig (1000 Mbps):</strong> Perfect for power users, businesses, and future-proofing</li>
        </ul>

        <div class="callout">
          <h3>Pro Tip</h3>
          <p>Don't just focus on download speeds – upload speeds matter too, especially for video calls, cloud backups, and content creation.</p>
        </div>

        <h2>Factors to Consider</h2>
        
        <h3>1. Number of Users and Devices</h3>
        <p>Consider how many people will be using the internet simultaneously and how many devices will be connected. Smart home devices, phones, tablets, laptops, and streaming devices all consume bandwidth.</p>

        <h3>2. Usage Patterns</h3>
        <p>Think about your primary internet activities:</p>
        <ul>
          <li>Basic web browsing and email</li>
          <li>Video streaming (Netflix, YouTube, etc.)</li>
          <li>Online gaming</li>
          <li>Video conferencing</li>
          <li>Large file downloads/uploads</li>
          <li>Smart home automation</li>
        </ul>

        <h3>3. Data Caps and Unlimited Plans</h3>
        <p>Some providers impose data caps, limiting how much data you can use each month. For most households, unlimited plans are worth the investment to avoid overage fees and throttling.</p>

        <h2>Fiber vs Cable vs DSL</h2>
        
        <h3>Fiber Internet</h3>
        <p>The gold standard for internet connectivity, fiber offers:</p>
        <ul>
          <li>Symmetrical upload and download speeds</li>
          <li>Ultra-low latency</li>
          <li>Superior reliability</li>
          <li>Future-proof technology</li>
        </ul>

        <h3>Cable Internet</h3>
        <p>Widely available and relatively fast, but with some limitations:</p>
        <ul>
          <li>Good download speeds</li>
          <li>Slower upload speeds</li>
          <li>Shared bandwidth with neighbors</li>
          <li>Performance can vary by location</li>
        </ul>

        <h3>DSL Internet</h3>
        <p>Older technology that's still available in many areas:</p>
        <ul>
          <li>Lower speeds compared to fiber and cable</li>
          <li>Performance depends on distance from provider</li>
          <li>More affordable option</li>
          <li>Dedicated line (not shared)</li>
        </ul>

        <h2>Making Your Decision</h2>
        <p>To choose the right plan:</p>
        <ol>
          <li>Assess your current usage with a speed test</li>
          <li>Consider your household's growth and future needs</li>
          <li>Compare available technologies in your area</li>
          <li>Factor in reliability and customer service</li>
          <li>Consider bundling options if needed</li>
        </ol>

        <div class="cta-section">
          <h3>Ready to Upgrade?</h3>
          <p>Code Spheres offers fiber internet plans starting at just $39.99/month with no contracts and professional installation included. Check if fiber is available in your area today!</p>
        </div>
      `,
      category: "Guides",
      readTime: "8 min read",
      date: "March 15, 2024",
      author: "Sarah Chen",
      tags: ["Internet Plans", "Speed", "Comparison", "Fiber"]
    },
    '2': {
      title: "Mesh Wi-Fi vs Traditional Routers: Which is Right for You?",
      content: `
        <p>Dead zones, weak signals, and dropped connections – if these sound familiar, it might be time to upgrade your home network. The question is: should you stick with a traditional router or make the jump to a mesh system? Let's break down the differences to help you make the best choice.</p>

        <h2>What is a Traditional Router?</h2>
        <p>A traditional router is a single device that broadcasts Wi-Fi signals from one central location. It's the classic setup most people are familiar with – one box that handles all your wireless connectivity needs.</p>

        <h3>Pros of Traditional Routers:</h3>
        <ul>
          <li>Lower upfront cost</li>
          <li>Simple setup and management</li>
          <li>Less network complexity</li>
          <li>Often more powerful for single-device performance</li>
        </ul>

        <h3>Cons of Traditional Routers:</h3>
        <ul>
          <li>Limited range and coverage</li>
          <li>Dead zones in larger homes</li>
          <li>Signal degradation through walls and floors</li>
          <li>Single point of failure</li>
        </ul>

        <h2>What is Mesh Wi-Fi?</h2>
        <p>Mesh Wi-Fi systems use multiple nodes (typically 2-3 devices) working together to create a seamless network throughout your home. These nodes communicate with each other to provide consistent coverage everywhere.</p>

        <h3>Pros of Mesh Systems:</h3>
        <ul>
          <li>Excellent whole-home coverage</li>
          <li>Eliminates dead zones</li>
          <li>Seamless roaming between nodes</li>
          <li>Easy to expand coverage</li>
          <li>Often includes advanced features</li>
        </ul>

        <h3>Cons of Mesh Systems:</h3>
        <ul>
          <li>Higher cost</li>
          <li>More complex setup</li>
          <li>Potential for network congestion</li>
          <li>May be overkill for smaller spaces</li>
        </ul>

        <div class="callout">
          <h3>Quick Tip</h3>
          <p>If your home is under 1,500 square feet and has an open floor plan, a high-end traditional router might be sufficient. For larger homes or those with multiple floors, mesh is usually the better choice.</p>
        </div>

        <h2>When to Choose a Traditional Router</h2>
        <p>A traditional router might be perfect for you if:</p>
        <ul>
          <li>You live in a small apartment or home (under 1,500 sq ft)</li>
          <li>You have a tight budget</li>
          <li>Most of your devices are close to the router location</li>
          <li>You prefer simple network management</li>
          <li>You need maximum performance for gaming or streaming</li>
        </ul>

        <h2>When to Choose Mesh Wi-Fi</h2>
        <p>Mesh systems are ideal when:</p>
        <ul>
          <li>You have a large home (over 2,000 sq ft)</li>
          <li>Your home has multiple floors</li>
          <li>You experience dead zones with your current setup</li>
          <li>You have many connected devices throughout the home</li>
          <li>You want the latest features and easy management</li>
        </ul>

        <h2>Key Features to Consider</h2>

        <h3>Wi-Fi Standards</h3>
        <p>Look for Wi-Fi 6 (802.11ax) or newer for the best performance and future-proofing. This standard offers faster speeds, better efficiency, and improved performance with multiple devices.</p>

        <h3>Coverage Area</h3>
        <p>Consider the square footage each system covers and whether it matches your home's layout. Don't forget about outdoor spaces if you need coverage there too.</p>

        <h3>Device Capacity</h3>
        <p>Modern systems should handle 50+ connected devices without performance degradation. Consider your current devices plus future additions.</p>

        <h3>Management Features</h3>
        <p>Look for user-friendly apps that offer:</p>
        <ul>
          <li>Easy setup and configuration</li>
          <li>Network monitoring and diagnostics</li>
          <li>Parental controls</li>
          <li>Guest network management</li>
          <li>Automatic updates</li>
        </ul>

        <div class="cta-section">
          <h3>Professional Installation Available</h3>
          <p>Code Spheres offers professional Wi-Fi setup and optimization services. Our certified technicians will analyze your home's layout and configure the perfect wireless solution for maximum coverage and performance.</p>
        </div>
      `,
      category: "Technology",
      readTime: "6 min read",
      date: "March 12, 2024",
      author: "Marcus Rodriguez",
      tags: ["Wi-Fi", "Mesh", "Routers", "Coverage", "Technology"]
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button 
                variant="outline"
                onClick={() => window.history.back()}
                className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </div>

            {/* Article Header */}
            <article className="glass-card p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4 text-sm text-text-muted">
                  <span className="glass-card px-3 py-1 text-neon-orange border border-neon-orange/30">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-text-primary mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange"
                  >
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/class="callout"/g, 'class="glass-card p-6 my-8 border-l-4 border-neon-orange"').replace(/class="cta-section"/g, 'class="glass-card p-8 my-8 text-center bg-gradient-orb"') }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-glass-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="glass-card px-3 py-1 text-sm text-text-muted hover:text-neon-orange hover:border-neon-orange transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 glass-card p-8 text-center bg-gradient-orb">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Ready to Upgrade Your Internet?
                </h3>
                <p className="text-text-secondary mb-6">
                  Get lightning-fast fiber internet with professional installation and 24/7 support.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="neon-button px-6">
                    Check Availability
                  </Button>
                  <Button 
                    variant="outline"
                    className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange"
                  >
                    View Plans
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPost;