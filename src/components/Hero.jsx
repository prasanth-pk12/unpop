import React from 'react';
import './Hero.css';
import { motion } from "framer-motion";
import Peacock from "../peakock.svg"


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Mandala Background Patterns */}
        <div className="mandala-pattern mandala-left">
          <img 
            src="/images/hero_card.png" 
            alt="Decorative pattern" 
            className="mandala-image"
          />
        </div>

        <div className="mandala-pattern mandala-right">
          <img 
            src="/images/hero_card.png" 
            alt="Decorative pattern" 
            className="mandala-image"
          />
        </div>



        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">UNPOP.SHOP</h1>
            <p className="hero-tagline">Product meets quality</p>
            <p className="hero-subtitle">featuring homegrown and unbranded products</p>
          </div>
          
          <div className="hero-visual">
            {/* Peacock Illustration */}
            <div className="peacock-container" width="50%">
              <motion.div
                animate={{ rotate: [0, 5, 10, -5, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
              >
                <img src={Peacock} alt="Peacock" className="peacock-svg" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;