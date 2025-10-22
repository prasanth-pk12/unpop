import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-heading">
              UNPOP<span>.</span>SHOP
            </h1>
            <p>Heros helps you to find quality and save money</p>
          </div>
          <img 
            src="/images/image.png" 
            alt="Unpop.Shop showcase" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero