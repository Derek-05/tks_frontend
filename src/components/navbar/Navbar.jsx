import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Techkidslogo2.jpg.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//We created a Menu where we put all the nav links and we wrapped it the react element <></>

// Learn more about BEM => Block Element Modifier

const Navbar = () => {
  const [menu, setMenu] = useState("job_offers");
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header class="sticky">
      <a href="#">
        {" "}
        <img src={logo} width="90vh" alt="logo" />
      </a>

      <ul class="navbar">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="./">Home</Link>
          {menu === "home" ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("job_offers");
          }}
        >
          <Link to="./">Job Offer</Link>
          {menu === "job_offers" ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="./benefits">Benefits</Link>
          {menu === "home" ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="./apply_now">Apply Now </Link>
          {menu === "home" ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="./contact">Contact</Link>
          {menu === "home" ? <h /> : <></>}
        </li>
      </ul>
      <div class="h-right">
        <a href="#">Login</a>
        <a href="#">Sign up</a>
        <FontAwesomeIcon icon={faBars} id="menu-icon" />
      </div>
    </header>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  if (menuIcon) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    };
  }

  // Obtén todos los elementos de enlace dentro del menú
  let menuLinks = document.querySelectorAll(".navbar a");

  // Agrega un evento de clic a cada enlace
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Cierra el menú al hacer clic
      if (menuIcon) {
        menuIcon.classList.remove("bx-x");
      }
      if (navbar) {
        navbar.classList.remove("open");
      }

      // Obtén el atributo href del enlace para la sección de destino
      let targetSectionId = link.getAttribute("href").substring(1);
      let targetSection = document.getElementById(targetSectionId);

      // Verifica si la sección de destino existe antes de desplazarse
      if (targetSection) {
        event.preventDefault();

        // Ajusta la posición de desplazamiento en función de la barra de navegación
        let offset = navbar.clientHeight;

        // Desplázate suavemente a la sección de destino
        window.scrollTo({
          top: targetSection.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });

  // Oculta la barra de navegación mientras haces scroll
  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    if (isScrollingUp) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    prevScrollPos = currentScrollPos;
  });
});

export default Navbar;
