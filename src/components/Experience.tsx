
const Experience = () => {
    
  const experiences = [
    {
      date: "April 2024 – April 2025",
      role: "Full Stack Software Engineer Level II",
      company: "Prakash Software Solution Pvt. Ltd.",
    },
    {
      date: "March 2023 – April 2024",
      role: "Full Stack Software Engineer Level III",
      company: "Prakash Software Solution Pvt. Ltd.",
    },
    {
      date: "July 2022 – January 2023",
      role: "Junior Web Developer",
      company: "Yudiz Solutions Ltd.",
    },
    {
      date: "January 2022 – June 2022",
      role: "Web Developer Intern",
      company: "Yudiz Solutions Ltd.",
    },
  ];
  return (
    <section className="experience" id="experience">
          <h2 className="section-title">Experience</h2>

          <div className="timeline">

            {experiences.map((experience) => (
              <div className="timeline-item" key={experience.role}>
                <div className="timeline-dot"></div>

                <div className="experience-card">
                  <span className="experience-date">
                    {experience.date}
                  </span>

                  <h3>{experience.role}</h3>

                  <h4>{experience.company}</h4>
                </div>
              </div>
            ))}

          </div>
        </section>
  )
}

export default Experience