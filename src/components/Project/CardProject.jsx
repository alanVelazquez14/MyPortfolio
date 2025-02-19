import React from "react";
import {
  CardProjectContainer,
  DescriptionCardProject,
  ImgCardProject,
  TechBadge,
  TechOverlay,
  TitleCardProject,
  UrlCardProjectContainer,
} from "./CardProjectStyles";
import { FaLink } from "react-icons/fa";

const CardProject = ({ title, img, url, technologies, description }) => {
  return (
    <CardProjectContainer>
      <TitleCardProject>{title}</TitleCardProject>
      <ImgCardProject src={img} alt={title} />
      <DescriptionCardProject>{description}</DescriptionCardProject>

      <TechOverlay>
        {technologies &&
          technologies.map((tech, index) => (
            <TechBadge key={index}>{tech}</TechBadge>
          ))}
        <UrlCardProjectContainer>
          <FaLink />
          <a href={url} target="_black">
            View Project
          </a>
        </UrlCardProjectContainer>
      </TechOverlay>
    </CardProjectContainer>
  );
};

export default CardProject;
