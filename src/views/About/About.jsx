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
    <AboutContainer>
      <TitleAbout>ABOUT ME</TitleAbout>
      <TextAboutContainer>
        <TextAbout1>
          I am a full-stack web developer with experience in Java, React, and
          CSS, backed by certifications obtained from <span>Nucba</span> that
          validate my knowledge.
        </TextAbout1>

        <TextAbout2>
          I AM CURRENTLY EXPANDING MY SKILLS THROUGH AN ADVANCED WEB DESIGN
          COURSE AT THE <span>SOY HENRY</span> BOOTCAMP..
        </TextAbout2>
      </TextAboutContainer>
    </AboutContainer>
  );
};

export default About;
