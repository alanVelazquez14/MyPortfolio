import React from "react";
import { Link, LinksStyled, NavbarContainer } from "./NavbarStyles";

const Navbar = () => {
    const navLinks = [
        { title: "Alan", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Education", path: "/education" },
        { title: "Skills", path: "/skills" },
    ];
  return (
    <NavbarContainer>
      <LinksStyled>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.path}>
            {link.title.toUpperCase()}
          </Link>
        ))}
      </LinksStyled>
    </NavbarContainer>
  );
};

export default Navbar;
