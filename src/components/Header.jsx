import './Header.css'

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contactForm')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <button className="btn btn-primary" onClick={scrollToContact}>
        Register
      </button>
    </header>
  )
}

export default Header