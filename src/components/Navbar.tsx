
const Navbar = ({active,setActive}:any) => {


    const navItems = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
    ];

    return (
        <nav className="navbar">
            <div className="logo">IR.</div>

            <ul className="nav-links">
                {navItems.map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item}`}
                            className={active === item ? "active-link" : ""}
                            onClick={() => setActive(item)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            <a className="resume-btn" href="./Ishika_Rana.pdf" download>
                Download Resume
            </a>
        </nav>
    )
}

export default Navbar