import React, { useState, useEffect } from 'react';
import '../style/style.css';
import '../style/queries.css'
import CV from '../assets/CV - Lemonnier.pdf'

function MenuBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            window.scrollBy(0, -80);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <nav className="menu">
            
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a
                        href="#presentation"
                        className={activeSection === 'presentation' ? 'active' : ''}
                        onClick={toggleMenu} 
                    >
                        Présentation
                    </a>
                </li>
                <li>
                    <a
                        href="#competences"
                        className={activeSection === 'competences' ? 'active' : ''}
                        onClick={toggleMenu}
                    >
                        Compétences
                    </a>
                </li>
                <li>
                    <a
                        href="#projets"
                        className={activeSection === 'projets' ? 'active' : ''}
                        onClick={toggleMenu}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeSection === 'contact' ? 'active' : ''}
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href={ CV }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Télécharger CV
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MenuBar;
