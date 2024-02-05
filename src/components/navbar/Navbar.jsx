import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Techkidslogo2.jpg.png";
import UserAuth from "../UserAuth/UserAuth";
import Modal from "../Modal/Modal";
import "./navbar.css";
import LoginForm from "../Modal/LoginForm/LoginForm";
import Model from "react-modal";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1050);
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 1050);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1050) {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (navbarRef.current) {
        const currentScrollPos = window.pageYOffset;
        navbarRef.current.className = currentScrollPos > 100 ? "sticky" : "";
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Job Offer", path: "/job" },
    { name: "Benefits", path: "/benefits" },
    { name: "Apply Now", path: "/apply_now" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/Dashboard" },
  ];

  
  

  const handleLoginSuccess = (token, userData) => {
    console.log("Handling login success:", token, userData);
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
    setModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const handleLoginClick = () => {
    setModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      ref={navbarRef}
      className={window.pageYOffset > 100 ? "sticky" : ""}
    >
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
            <UserAuth
              user={user}
              onLoginClick={handleLoginClick}
              onLogoutClick={handleLogout}
            />
          </li>
        )}
      </nav>
      {!isMobileView && (
        <div className="h-right">
          <UserAuth
            user={user}
            onLoginClick={handleLoginClick}
            onLogoutClick={handleLogout}
          />
        </div>
      )}
      <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </header>
  );
};

export default Navbar;
