import React from "react";
import {
  ButtonCertificate,
  ContainerButtons,
  EducationContainer,
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
      <EducationContainer>
        <TitleEducation>EDUCATION</TitleEducation>

        <SubtitleEducation>NUCBA</SubtitleEducation>
        <TextEducation>Full Stack Developer (Finalizado - 2024)</TextEducation>

        <SubtitleEducation>SOY HENRY</SubtitleEducation>
        <TextEducation>Full Stack Developer (En curso)</TextEducation>

        <SubtitleEducation>CERTIFICATES</SubtitleEducation>
        <TextEducation>Click on the certificate to download it.</TextEducation>
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
