import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSwaps from "@/components/FeaturedSwaps";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedSwaps />
      <HowItWorks />
      <Categories />
      <Footer />
    </main>
  );
};

export default Index;
