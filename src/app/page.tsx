import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Feature from '@/components/Feature'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <Hero />
      <Feature />
      <Product />
      <Blog />
      <Footer />
    </main>
  );
}
