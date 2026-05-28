
const Skills = () => {
    const skills = [
        "JavaScript",
        "React",
        "Next.js",
        "NestJS",
        "Node.js",
        "TypeScript",
        "CSS",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Git",
        "RESTful APIs",
    ];
    return (
        <section className="skills" id="skills">
            <h2>My Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills