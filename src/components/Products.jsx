import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Handcrafted Jewelry",
      image: "/images/hero_card.png", // Using available image as placeholder
      description: "Unique handmade jewelry pieces"
    },
    {
      id: 2,
      title: "Organic Skincare",
      image: "/images/hero_card.png", // Using available image as placeholder
      description: "Natural and organic beauty products"
    },
    {
      id: 3,
      title: "Artisan Crafts",
      image: "/images/hero_card.png", // Using available image as placeholder
      description: "Traditional handicrafts and artworks"
    },
    {
      id: 4,
      title: "Home Decor",
      image: "/images/hero_card.png", // Using available image as placeholder
      description: "Handmade home decoration items"
    }
  ];

  const handleExploreMore = () => {
    // Open products page in new tab
    window.open('/products.html', '_blank');
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header">
          <h2>Our Products</h2>
          <p>Discover unique homegrown and unbranded products</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="products-action">
          <button 
            className="explore-more-btn"
            onClick={handleExploreMore}
          >
            Explore All Products
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Products;