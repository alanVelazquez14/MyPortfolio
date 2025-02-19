import React from "react";
import {
  Link as StyledLink,
  LinksStyled,
  NavbarContainer,
} from "./NavbarStyles";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { title: "Alan", to: "home" },
    { title: "Sobre mí", to: "about" },
    { title: "Proyectos", to: "projects" },
    { title: "Educación", to: "education" },
    { title: "Skills", to: "skills" },
  ];

  return (
    <NavbarContainer>
      <LinksStyled>
        {navLinks.map((link, index) => (
          <ScrollLink
            to={link.to}
            smooth={true}
            duration={500}
            offset={-100}
            key={index}
          >
            <StyledLink>{link.title.toUpperCase()}</StyledLink>
          </ScrollLink>
        ))}
      </LinksStyled>
    </NavbarContainer>
  );
};

export default Navbar;
