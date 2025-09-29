import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
