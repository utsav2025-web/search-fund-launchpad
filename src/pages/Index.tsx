import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Thesis from "@/components/landing/Thesis";
import Approach from "@/components/landing/Approach";
import Team from "@/components/landing/Team";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Team />
      <Thesis />
      <Approach />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
