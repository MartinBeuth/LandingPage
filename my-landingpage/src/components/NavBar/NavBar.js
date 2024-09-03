import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/navbar.css';


const NavBar = ({ onNavClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <button className="hamburger-button" onClick={toggleMenu}>
                &#9776; {}
            </button>
            {isOpen && (
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/Vita" onClick={() => { onNavClick(); setIsOpen(false); }} className="nav-link">
                            Vita
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Projekte" onClick={() => { onNavClick(); setIsOpen(false); }} className="nav-link">
                            Projekte
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Kontakt" onClick={() => { onNavClick(); setIsOpen(false); }} className="nav-link">
                            Kontakt
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CodingMusic" onClick={() => { onNavClick(); setIsOpen(false); }} className="nav-link">
                            Musik zum Coden
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default NavBar;
