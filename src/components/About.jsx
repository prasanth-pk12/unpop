import './About.css'

const About = () => {
  const features = [
    {
      id: 1,
      text: "🔹 Exclusivity – We only feature homegrown and unbranded products, giving you a platform tailored to your needs."
    },
    {
      id: 2,
      text: "🔹 Simple Setup – Launch your online store quickly and easily with our user-friendly tools."
    },
    {
      id: 3,
      text: "🔹 Focused Audience – Reach customers who appreciate and seek out authentic, local, and small-scale products."
    },
    {
      id: 4,
      text: "🔹 Affordable Pricing – We keep costs low so that you can grow your business without breaking the bank."
    }
  ]

  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading">Struggling to Enter the Digital Space?</h2>
        <p>We're the Platform for Homegrown and Unbranded Products!</p>
        <p>
          At Unpop.Shop, we're not just another e-commerce site—we're dedicated exclusively to promoting homegrown, unbranded products. If you're a small business looking for a space where your unique offerings can shine, we're here to help.
        </p>
        <h3>Why Choose Us?</h3>
        <div className="features">
          {features.map((feature) => (
            <div key={feature.id} className="feature">
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About