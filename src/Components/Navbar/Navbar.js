    import React, { useEffect, useState } from "react";
    import './Navbar.css';
    import '../../App.css';

    import logo from '../../Assets/logo.png';

    const Navbar = () => {
        const [activeLang, setAcitveLang] = useState('cs');
        const [activeSection, setActiveSection] = useState('hero');

        useEffect(() => {
            const sections = document.querySelectorAll('section');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting) {
                            setActiveSection(entry.target.id);
                        }
                    });
                },
                {threshold: 0.2}
            );

            sections.forEach((section) => {
                observer.observe(section);
            });

            return () => {
                sections.forEach((section) => observer.unobserve(section));
            };
        }, []);
        return(
            <div className="navbar">
                <div className="nav-left">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="nav-right">
                    <ul>
                        <a href=".hero">
                            <li className={activeSection === 'hero' ? 'active' : ''}>O nás</li>
                        </a>
                        <a href="#service">
                            <li className={activeSection === 'service' ? 'active' : ''}>Služby</li>
                        </a>
                        <a href="#team">
                            <li className={activeSection === 'team' ? 'active' : ''}>Rezervace</li>
                        </a>
                        <a href="#map">
                            <li className={activeSection === 'map' ? 'active' : ''}>Kontakt</li>
                        </a>
                        <button 
                            onClick={() => setAcitveLang('cs')}
                            style={{ backgroundColor: activeLang === 'cs' ? 'var(--secondary-color)': '', color: activeLang === 'cs' ? "var(--main-color)" : ""}}
                        >
                            cs
                        </button>
                        <button
                            onClick={() => setAcitveLang('en')}
                            style={{ backgroundColor: activeLang === 'en' ? 'var(--secondary-color)': '', color: activeLang === 'en' ? "var(--main-color)" : ""}}
                        >
                            en
                        </button>
                    </ul>
                </div>
            </div>
        )
    }

    export default Navbar;