
const About = () => {
  return (
    <section className="about" id="about">
          <div className="about-left">
            <h2>About Me</h2>

            <p>
              I’m a passionate Full Stack Software Engineer with 3+ years of
              experience building scalable and high-performance web applications
              using React.js, Next.js, NestJS, Node.js, and modern frontend
              technologies. I enjoy creating responsive user interfaces,
              architecting RESTful APIs, and solving complex real-time application
              challenges.
            </p>
          </div>

          <div className="about-right">
            <div className="about-card">
              <h3>3+ Years</h3>
              <p> of Professional Experience</p>
            </div>

            <div className="about-card">
              <h3>Real-Time Systems</h3>
              <p>Worked on live bidding & streaming features</p>
            </div>


            <div className="about-card">
              <h3>REST APIs</h3>
              <p>Developed scalable backend services</p>
            </div>

            <div className="about-card">
              <h3>Performance Focused</h3>
              <p>Optimized scalable and responsive applications</p>
            </div>
          </div>
        </section>
  )
}

export default About