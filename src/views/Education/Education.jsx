import React from "react";
import {
  ButtonCertificate,
  ContainerButtons,
  EducationContainer,
  ParagraphEducation,
  SubtitleEducation,
  TextEducation,
  TitleEducation,
} from "./EducationStyles";

const Education = () => {
  const certificates = [
    {
      name: "DISEÑO WEB",
      url: "/Certificado_Diseño_Web.pdf",
    },
    {
      name: "JAVASCRIPT",
      url: "/Certificado_Javascript.pdf",
    },
    {
      name: "REACT",
      url: "/Certificado_React.pdf",
    },
  ];

  return (
    <>
      <EducationContainer id="education">
        <TitleEducation>EDUCATION</TitleEducation>

        <SubtitleEducation>NUCBA</SubtitleEducation>
        <TextEducation>Full Stack Developer (Finalizado - 2024)</TextEducation>
        <ParagraphEducation>
          Formación integral que abarcó tanto el frontend como el backend, con
          énfasis en la creación de aplicaciones web escalables y eficientes.
        </ParagraphEducation>
        <SubtitleEducation>SOY HENRY</SubtitleEducation>
        <TextEducation>Full Stack Developer (En curso)</TextEducation>
        <ParagraphEducation>
          Curso intensivo que me está preparando para enfrentar desafíos reales
          en el desarrollo de software, con un enfoque práctico y metodologías
          ágiles.
        </ParagraphEducation>

        <SubtitleEducation>CERTIFICADOS</SubtitleEducation>
        <TextEducation>
          Haga clic en el certificado para descargarlo.
        </TextEducation>
        <ContainerButtons>
          {certificates.map((cert) => (
            <ButtonCertificate key={cert.name}>
              <a key={cert.name} href={cert.url} download={cert.name + ".pdf"}>
                {cert.name}
              </a>
            </ButtonCertificate>
          ))}
        </ContainerButtons>
      </EducationContainer>
    </>
  );
};

export default Education;
