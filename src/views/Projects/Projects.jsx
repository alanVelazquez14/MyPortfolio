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
    <ProjectContainer id="projects">
      <TitleProject>PROYECTOS</TitleProject>
      <TextProject> Proyectos en los que he trabajado: </TextProject>
      <ContainerCards>
        {dataProjects.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.img}
            url={project.url}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
      </ContainerCards>
    </ProjectContainer>
  );
};

export default Projects;
