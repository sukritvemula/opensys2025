import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Countdown from "@/components/countdown/Countdown";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home/>
      <Countdown />
      <About />
      <Events />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
