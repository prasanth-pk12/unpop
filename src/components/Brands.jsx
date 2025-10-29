import React from 'react';
import './Brands.css';

const Brands = () => {
  // Sample brand logos/names - you can replace these with actual brand data
  const brands = [
    { name: "EcoTech", logo: "/images/brand1.png" },
    { name: "PureLife", logo: "/images/brand2.png"  },
    { name: "NatureCraft", logo: "/images/brand3.png" },
    { name: "FreshMade", logo: "/images/brand4.png"  }
  ];

  return (
    <section id="brands" className="brands">
      <div className="brands-container">
        <h2 className="brands-heading">Our Trusted Brands</h2>
        <p className="brands-description">
          Partnering with homegrown and unbranded quality manufacturers
        </p>
        
        <div className="brands-slider">
          <div className="brands-track">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="brand-item">
                <div className="brand-loo">
                  <img src={brand.logo} alt={`${brand.name} logo`} />
                </div>
                {/* <span className="brand-name">{brand.name}</span> */}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="brand-item">
                <div className="brand-log">
                  <img src={brand.logo} alt={`${brand.name} logo`} />
                </div>
                {/* <span className="brand-name">{brand.name}</span> */}
              </div>
            ))}
          </div>
        </div>
        
        {/* Loading indicator */}
        {/* <div className="brands-loading">
          <div className="loading-spinner"></div>
          <span className="loading-text">Loading more brands...</span>
        </div> */}
      </div>
    </section>
  );
};

export default Brands;