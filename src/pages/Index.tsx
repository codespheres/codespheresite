import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import Stats from '@/components/Stats';
import Newsletter from '@/components/Newsletter';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Stats />
        <Testimonials />
        <BlogPreview />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
