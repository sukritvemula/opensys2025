import { Users, Rocket, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering students to explore and innovate in the world of open-source technology through hands-on experiences and collaborative learning.",
    },
    {
      icon: Users,
      title: "Who We Are",
      description: "CBIT Open Source Community (COSC) is a student-driven tech community passionate about fostering innovation and knowledge sharing in open-source development.",
    },
    {
      icon: Rocket,
      title: "What We Do",
      description: "We organize exciting tech events, workshops, and hackathons that help students learn, create, and grow together in the open-source ecosystem.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-warmWhite">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 text-navy font-medium text-sm mb-6 inline-block">
            About COSC
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Building Tomorrow's Tech Leaders
          </h2>
          <p className="text-softBlack/80">
            Join CBIT's thriving open-source community where innovation meets collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 p-8 group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-coral/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 text-coral mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-softBlack/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
