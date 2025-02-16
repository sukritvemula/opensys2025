import { Mail, Phone, MapPin, MessageSquare, Github, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";

const EncryptedText = ({ text }: { text: string }) => {
  const [iteration, setIteration] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const intersectionRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&*<>[]{}!?/\\|+=";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setIteration(0);
          setShouldAnimate(true);
        }
      });
    });

    observer.observe(intersectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const startAnimation = () => {
      setIteration(0);
      setShouldAnimate(true);
    };

    if (isVisible && shouldAnimate) {
      interval = setInterval(() => {
        setIteration((prev) => {
          if (prev >= text.length) {
            setShouldAnimate(false);
            setTimeout(startAnimation, 3000);
            return prev;
          }
          return prev + 1;
        });
      }, 30);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible, shouldAnimate, text.length]);

  const encrypt = (iteration: number) => {
    return text
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        if (letter === " ") return " ";
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
  };

  return (
    <span ref={intersectionRef} className="font-mono text-sm md:text-base text-softBlack/60 tracking-wider">
      {isVisible ? encrypt(iteration) : text}
    </span>
  );
};

const Contact = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: MessageSquare,
      url: "https://discord.com/invite/BCBvtyPsEt",
      color: "hover:bg-[#5865F2]"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/cbitosc",
      color: "hover:bg-[#333333]"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/cbitosc/",
      color: "hover:bg-[#E4405F]"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/cbitosc",
      color: "hover:bg-[#1877F2]"
    },
    {
      name: "X",
      icon: Twitter, // X (formerly Twitter) icon
      url: "https://twitter.com/cbitosc",
      color: "hover:bg-[#000000]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/cbitosc",
      color: "hover:bg-[#0A66C2]"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-warmWhite">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 text-navy font-medium text-sm mb-6 inline-block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Contact Us
          </h2>
          <p className="text-softBlack/60">
            Have questions? We're here to help you with any queries about OpenSys 2025.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-coral shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Email</h3>
                    <a href="mailto:cosc@cbit.ac.in" className="text-softBlack/80 hover:text-coral transition-colors">
                      cosc@cbit.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-coral shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Contact</h3>
                    <div className="space-y-1">
                      <a href="tel:+917995166572" className="block text-softBlack/80 hover:text-coral transition-colors">
                        Muzaffar: +91 95425 90164
                      </a>
                      <a href="tel:+919442621187" className="block text-softBlack/80 hover:text-coral transition-colors">
                        Imaduddin: +91 90528 12005
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-coral shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Location</h3>
                    <a 
                      href="https://maps.google.com/?q=CBIT+Hyderabad" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-softBlack/80 hover:text-coral transition-colors"
                    >
                      Chaitanya Bharathi Institute of Technology<br />
                      Gandipet, Hyderabad - 500075
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-navy mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      className={`flex items-center gap-2 hover:text-white ${social.color} transition-all duration-300`}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <social.icon className="w-5 h-5" />
                      <span>{social.name}</span>
                    </Button>
                  ))}
                </div>
                <p className="text-softBlack/60 mt-6">
                  Follow us for the latest updates and announcements about OpenSys 2025!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-navy/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-navy mb-4">Related Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cbit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-softBlack/80 hover:text-coral transition-colors"
              >
                CBIT
              </a>
              <a
                href="https://cbitosc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-softBlack/80 hover:text-coral transition-colors"
              >
                COSC Official Website
              </a>
              <a
                href="https://cbit-hacktoberfest24.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-softBlack/80 hover:text-coral transition-colors"
              >
                HacktoberFest'24
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-16 pt-8 border-t border-navy/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <EncryptedText text="COPYRIGHT © 2025 COSC. ALL RIGHTS RESERVED." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
