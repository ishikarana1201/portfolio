import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = ({ setActive }: any) => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hello">Hello, I'm</p>

        <h1>Ishika M. Rana</h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-text">
          Full Stack Developer with 3+ years of experience building scalable React, Next.js and NestJS applications including real-time auction systems, invoice generators and video platforms.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button
              className="primary-btn"
              onClick={() => setActive("projects")}
            >
              View My Work
            </button>
          </a>
          <a href="#contact">
            <button
              className="secondary-btn"
              onClick={() => setActive("contact")}
            >
              Contact Me
            </button>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/ishikarana1201" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/ishika-rana-724021215/" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:ishikarana1201@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-circle no-image">
          <h1>IR</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero