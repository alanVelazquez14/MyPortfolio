import React from "react";
import {
  ContainerCards,
  ProjectContainer,
  TextProject,
  TitleProject,
} from "./ProjectsStyles";
import CardProject from "../../components/Project/CardProject";
import { dataProjects } from "../../components/Project/dataProjects";

const Projects = () => {
  return (
    <ProjectContainer>
      <TitleProject>PROJECTS</TitleProject>
      <TextProject> Projects I have worked on: </TextProject>
      <ContainerCards>
        {dataProjects.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.img}
            url={project.url}
            technologies={project.technologies}
          />
        ))}
      </ContainerCards>
    </ProjectContainer>
  );
};

export default Projects;
