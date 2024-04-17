import "./Header.scss";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";
    return (
      <ul className={`${listClassName} flex gap-8 items-center`}>
        <li>
          <a href="#home" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#whychooseus" className={linkClassName} onClick={closeMobileMenu}>
            Why Choose Us
          </a>
        </li>
        <li>
          <a href="#howitworks" className={linkClassName} onClick={closeMobileMenu}>
            How It Works
          </a>
        </li>
        <li>
          <a href="#roadmap" className={linkClassName} onClick={closeMobileMenu}>
            Roadmap
          </a>
        </li>
        <li>
          <a
            href="https://app.flareuniverse.xyz"
            target="_blank"
            className={`${linkClassName} ${buttonClassName} btn-grad rounded-full`}
            onClick={closeMobileMenu}
          >
            Open dApp
          </a>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav__logo">
          <div className="logo flex items-center gap-2">
            <img src="logo.png" alt="logo" />
            <span>Flare Universe</span>
          </div>
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );

  return (
    <header className="flex justify-between absolute top-0 w-[98%] py-4" id="header">
      <div className="logo flex items-center gap-2">
        <img src="logo.png" alt="logo" />
        <span>Flare Universe</span>
      </div>
      <nav className="flex gap-5 items-center">
        <a className="header-item">Home</a>
        <a className="header-item">How It Works</a>
        <a className="header-item">Roadmap</a>
        <a className="header-item">FAQ</a>
      </nav>
      <button className="btn-grad rounded-full">Open dAPP</button>
    </header>
  );
};

export default Header;
