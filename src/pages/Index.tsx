import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

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
      
      <section id="about">
        <About />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
