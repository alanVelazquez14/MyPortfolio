import styled from "styled-components";

export const EducationContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: start;
  margin-left: 400px;
  flex-direction: column;
`;

export const TitleEducation = styled.h1`
  font-size: 3rem;
  color: #b9d6f2;
`;

export const SubtitleEducation = styled.h2`
  font-size: 2rem;
  color: #b9d6f2;
`;

export const TextEducation = styled.p`
  font-size: 1.5rem;
  color: #b9d6f2;
  margin-left: 20px;
  margin-top: -20px;
`;

export const ParagraphEducation = styled.p`
  font-size: 1rem;
  color: #b9d6f2;
  margin-left: 20px;
  margin-top: -10px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonCertificate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 700;
  a {
    background-color: #007bff;
    color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;

    &:hover {
      background-color: brown;
    }
  }
`;
