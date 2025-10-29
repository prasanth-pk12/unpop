import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Athangudi Tiles",
      image: "/images/tiles.png",
      file: null, // PDF file path
      type: "coming-soon"
    },
    {
      id: 2,
      title: "Indian Spices",
      image: "/images/spices.png",
      file: "/documents/indian_spices.pdf", // Image file path
      type: "pdf"
    },
    {
      id: 3,
      title: "Handmade soap",
      image: "/images/soup.png",
      file: null, // No file - will show coming soon
      type: "coming-soon"
    },
    {
      id: 4,
      title: "Handicrafts",
      image: "/images/handcraft.png",
      file: null, // PDF file path
      type: "coming-soon"
    }
  ];

  const handleProductClick = (product) => {
    if (product.type === "pdf" && product.file) {
      // Open PDF in new tab
      window.open(product.file, '_blank');
    } else if (product.type === "image" && product.file) {
      // Open image in new tab
      window.open(product.file, '_blank');
    } else {
      // Show coming soon page
      showComingSoonPage(product);
    }
  };

  const showComingSoonPage = (product) => {
    const comingSoonHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coming Soon - ${product.title}</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(180deg, #f3c94a 0%, #eab308 50%, #d79a06 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .coming-soon-container {
            text-align: center;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 3rem;
            border-radius: 30px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
            max-width: 500px;
            margin: 2rem;
          }
          .logo {
            font-size: 3rem;
            font-weight: 900;
            background: linear-gradient(135deg, #2d3748, #4a5568);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
            letter-spacing: -2px;
          }
          .tagline {
            font-size: 1rem;
            color: #4a5568;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 2rem;
            opacity: 0.8;
          }
          .product-title {
            font-size: 2rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 1rem;
          }
          .coming-soon-text {
            font-size: 1.5rem;
            font-weight: 600;
            background: linear-gradient(135deg, #ff6b6b, #eab308);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
          }
          .description {
            font-size: 1.1rem;
            color: #4a5568;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
          .close-btn {
            background: linear-gradient(135deg, #ff6b6b, #eab308);
            color: white;
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 25px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .close-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
          }
        </style>
      </head>
      <body>
        <div class="coming-soon-container">
          <div class="logo">UNPOP.SHOP</div>
          <div class="tagline">Premium Products</div>
          <div class="product-title">${product.title}</div>
          <div class="coming-soon-text">Coming Soon!</div>
          <div class="description">
            We're working hard to bring you detailed information about this amazing product. 
            Stay tuned for updates!
          </div>
          <button class="close-btn" onclick="window.close()">Close</button>
        </div>
      </body>
      </html>
    `;
    
    const blob = new Blob([comingSoonHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

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
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-overlay">
                  <span className="click-indicator">
                    {product.type === 'pdf' ? '📄 View PDF' : 
                     product.type === 'image' ? '🖼️ View Image' : 
                     '🔜 Coming Soon'}
                  </span>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
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