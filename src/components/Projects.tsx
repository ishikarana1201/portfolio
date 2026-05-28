
const Projects = () => {
    const projects = [
        {
            title: "Automated Invoice & Document Generator",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
            alt: "invoice-generator",
            description:
                "Professional document generation platform with automated billing, secure storage, tax calculations, and responsive UI built using Next.js and TypeScript.",
            tech: ["Next.js", "TypeScript", "NestJS", "Tailwind"],
        },
        {
            title: "Car Video Upload & Rating System",
            image:
                "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb",
            alt: "video-rating-system",
            description:
                "High-performance media management platform with video streaming, rating logic, RESTful APIs, and scalable backend architecture using React.js and NestJS.",
            tech: ["React.js", "TypeScript", "NestJS", "PostgreSQL"],
        },
        {
            title: "Real-Time Auction & Bidding Platform",
            image:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
            alt: "auction-platform",
            description:
                "Real-time bidding application with live synchronization, SignalR integration, admin management panel, and automated PDF receipt generation.",
            tech: ["React.js", "TypeScript", "SignalR", "jsPDF"],
        },
    ];
    return (
        <section className="projects" id="projects">
            <h2>Featured Projects</h2>

            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <img src={project.image} alt={project.alt} />

                        <div className="project-content">
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tech-stack">
                                {project.tech.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects