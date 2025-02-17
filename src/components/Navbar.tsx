import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import gsap from "gsap";
import opensys from "./logo512.png"
import cosc from "./LogoCOSC.svg"

function Navbar() {
  const navRef = useRef(null);
  useEffect(() => {
    const navigation = navRef.current;
    if (!navigation) return;
    const anchors = navigation.querySelectorAll("a");
    let previous = null;
    const getNodes = (item) => [
      gsap.utils.shuffle(gsap.utils.selector(item)(".blue rect")),
      gsap.utils.shuffle(gsap.utils.selector(item)(".pink rect")),
    ];
    
    const handlePrevious = () => {
      if (previous) {
        previous.classList.remove("active");
        const nodes = getNodes(previous);
        
        gsap.killTweensOf(nodes[0]);
        gsap.killTweensOf(nodes[1]);
        
        gsap.to(nodes[0], {
          duration: 0.4,
          ease: "power1.out",
          attr: { x: "-101%" },
          overwrite: "auto",
        });
        
        gsap.to(nodes[1], {
          duration: 0.4,
          ease: "power1.out",
          attr: { x: "-101%" },
          delay: 0.05,
          overwrite: "auto",
        });
      }
    };
    
    const handleCurrent = (anchor) => {
      handlePrevious();
      anchor.classList.add("active");
      previous = anchor;
      const nodes = getNodes(anchor);
      gsap.to(nodes[0], { duration: 1.2, ease: "elastic.out(1, 0.3)", attr: { x: "0%" }, stagger: 0.012 });
      gsap.to(nodes[1], { duration: 1.2, ease: "elastic.out(1, 0.3)", attr: { x: "0%" }, stagger: 0.012, delay: 0.1 });
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        handleCurrent(anchor);
      });
    });

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleCurrent));
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="logo-container">
        <img className="logo" src={cosc} alt="" />
        <span style={{color:"white"}}>|</span>
        <img className="logo" src={opensys} alt="" />
      </div>
      <div className="nav-links">
        {["Home", "About","Events","FAQs","Contact"].map((text) => (
          <a href="#" key={text}>
            <span>{text}</span>
            <svg height="6px" width="100%" xmlns="http://www.w3.org/2000/svg">
              <g className="pink">
                <rect x="-101%" y="0" width="100%" height="3"></rect>
                <rect x="-101%" y="3" width="100%" height="3"></rect>
              </g>
              <g className="blue">
                <rect x="-101%" y="0" width="100%" height="3"></rect>
                <rect x="-101%" y="3" width="100%" height="3"></rect>
              </g>
            </svg>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;