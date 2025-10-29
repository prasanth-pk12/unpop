import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Athangudi Tiles",
      image: "/images/tiles.png", // Using available image as placeholder
    },
    {
      id: 2,
      title: "Indian Spices",
      image: "/images/spices.png", // Using available image as placeholder
    },
    {
      id: 3,
      title: "Handmade soap",
      image: "/images/soup.png", // Using available image as placeholder
    },
    {
      id: 4,
      title: "Handicrafts",
      image: "/images/handcraft.png", // Using available image as placeholder
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