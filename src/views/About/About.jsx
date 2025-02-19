import React from "react";
import {
  AboutContainer,
  TextAbout1,
  TextAbout2,
  TextAboutContainer,
  TitleAbout,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutContainer id="about">
      <TitleAbout>SOBRE MÍ</TitleAbout>
      <TextAboutContainer>
        <TextAbout1>
          Soy un desarrollador web full-stack apasionado por la creación de
          soluciones innovadoras. Tengo experiencia en Java, React y CSS, y
          cuento con certificaciones de <span>Nucba</span> que respaldan mis
          conocimientos.
        </TextAbout1>

        <TextAbout2>
          Actualmente, estoy ampliando mis habilidades a través de un curso de
          Diseño Web Avanzado en <span>Soy Henry</span>, con el objetivo de
          seguir creciendo como profesional y mejorar la experiencia de usuario
          en mis proyectos.
        </TextAbout2>

        <TextAbout1>
          Disfruto de enfrentar desafíos técnicos y encontrar soluciones
          creativas que hagan la diferencia. Además, me encanta colaborar con
          equipos multidisciplinarios y aprender de nuevas tecnologías y
          enfoques.
        </TextAbout1>
      </TextAboutContainer>
    </AboutContainer>
  );
};

export default About;
