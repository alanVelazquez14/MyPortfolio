import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiGit, SiGithub, SiVercel, SiPostman, SiJest } from "react-icons/si";
import {
  Container,
  InfoText,
  SkillsContainer,
  SkillsList,
  SkillsTitle,
  SubTitleSkills,
} from "./SkillsStyles";

const Skills = () => {
  const skills = [
    {
      title: "FRONTEND",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Styled Components", icon: <SiStyledcomponents /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      title: "BACKEND",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <SiVercel /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Jest", icon: <SiJest /> },
      ],
    },
  ];

  return (
    <SkillsContainer>
      <SkillsTitle>SKILLS</SkillsTitle>
      <Container>
        {skills.map((skill) => (
          <div key={skill.title}>
            <SubTitleSkills>{skill.title}</SubTitleSkills>
            <SkillsList>
              {skill.skills.map((s) => (
                <li key={s.name}>
                  <span>{s.icon}</span> {s.name}
                </li>
              ))}
            </SkillsList>
          </div>
        ))}
      </Container>
      <InfoText>
      Feel free to check out the source code of this portfolio here: 
      <a href="https://github.com/alanVelazquez14/MyPortfolio" target="_blank" rel="noreferrer">
         GitHub
      </a>
      </InfoText>
    </SkillsContainer>
  );
};

export default Skills;
