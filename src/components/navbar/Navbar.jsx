import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Techkidslogo2.jpg.png";
import UserAuth from "../UserAuth/UserAuth";
import "./navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1050);
  const navbarRef = useRef(null);

  // Function to handle resize event
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 1050);
    if (window.innerWidth >= 1050) {
      setIsMobileMenuOpen(false);
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (navbarRef.current) {
      const currentScrollPos = window.pageYOffset;
      navbarRef.current.className = currentScrollPos > 100 ? "sticky" : "";
    }
  };

  // Effect to handle resize event
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to handle scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Job Offer", path: "/job" },
    { name: "Benefits", path: "/benefits" },
    { name: "Apply Now", path: "/apply_now" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/Dashboard" },
    { name: "Signup", path: "/Signup" },
    { name: "Login", path: "/Login" },
  ];

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header ref={navbarRef} className={window.pageYOffset > 100 ? "sticky" : ""}>
      <a href="#">
        <img src={logo} width="90vh" alt="logo" />
      </a>
      {isMobileView && (
        <FontAwesomeIcon
          icon={faBars}
          id="menu-icon"
          onClick={toggleMobileMenu}
        />
      )}
      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              setActiveMenu(item.name);
              if (isMobileView) toggleMobileMenu();
            }}
          >
            <Link
              to={item.path}
              className={activeMenu === item.name ? "active" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
        {isMobileView && isMobileMenuOpen && (
          <li className="mobile-user-auth">
            {/* Any mobile-specific user authentication component */}
          </li>
        )}
      </nav>
      {!isMobileView && (
        <div className="h-right">
          <UserAuth />
        </div>
      )}
    </header>
  );
};

export default Navbar;
