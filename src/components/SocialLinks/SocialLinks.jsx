import React from "react";
import { IconsContainer } from "./SocialLinksStyles";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <IconsContainer>
      <a
        href="https://github.com/alanVelazquez14"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={30} color="black " />
      </a>
      <a
        href="https://www.linkedin.com/in/alanvelazquez14/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={30} color="#0e76a8" />
      </a>
      <a href="https://wa.me/2664774564" target="_blank" rel="noreferrer">
        <FaWhatsapp size={30} color="green" />
      </a>
    </IconsContainer>
  );
};

export default SocialLinks;
