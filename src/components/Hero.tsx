import { Button } from "./ui/button";

const Hero = () => {
  const scrollToEvents = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
  };
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden grid-background"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-offWhite/50" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 animate-fade-up">
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 text-navy font-clash font-medium text-sm tracking-wide">
              COSC x OpenSys
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-navy animate-fade-up">
            Where Technology
            <span className="text-coral"> Meets Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-softBlack/80 mb-8 animate-fade-up">
            Join us for an extraordinary journey into the future of technology.
            Connect with industry leaders, innovators, and fellow tech enthusiasts.
          </p>
          <div className="space-x-4 animate-fade-up">
            <Button
              onClick={scrollToEvents}
              className="rounded-full px-6 py-2 text-white bg-coral hover:bg-coral/90 transition-all duration-300"
            >
              Register Now
            </Button>
            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="rounded-full px-6 py-2 text-navy border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-offWhite to-transparent" />
    </section>
  );
};

export default Hero;
