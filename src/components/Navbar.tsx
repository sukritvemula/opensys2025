import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="glass-panel rounded-full px-4 md:px-6 py-3 flex items-center justify-between backdrop-blur-md bg-white/80"
          layout
        >
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/logo.png" 
              alt="COSC Logo"
              className="h-8 md:h-10 w-auto cursor-pointer"
              onClick={() => scrollToSection("home")}
            />
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <LayoutGroup>
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-navy text-sm font-medium"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  {hoveredItem === item.id && (
                    <motion.div
                      layoutId="nav-bubble"
                      className="absolute inset-0 bg-coral/10 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6
                      }}
                    />
                  )}
                  {item.label}
                </motion.button>
              ))}
            </LayoutGroup>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("events")}
                className="rounded-full px-6 py-2 bg-gradient-to-r from-coral to-coral/90 text-white hover:from-coral/90 hover:to-coral transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Register Now
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden p-2 text-navy hover:text-coral transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="glass-panel rounded-xl p-4 space-y-4 backdrop-blur-md bg-white/80">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-navy hover:text-coral transition-colors rounded-lg hover:bg-coral/5"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Button
                  onClick={() => scrollToSection("events")}
                  className="w-full rounded-full px-6 py-2 bg-gradient-to-r from-coral to-coral/90 text-white hover:from-coral/90 hover:to-coral transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Register Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
