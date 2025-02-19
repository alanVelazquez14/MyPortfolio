import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 100px;
  margin-left: 400px;
  margin-bottom: 200px;

  @media (max-width: 1280px) {
    margin-left: 300px;
  }

  @media (max-width: 1110px) {
    margin-left: 250px;
  }
`;

export const TitleProject = styled.h1`
  font-size: 3rem;
  color: #b9d6f2;

  @media (max-width: 1110px) {
    font-size: 1.8rem;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;
`;

export const TextProject = styled.p`
  font-size: 1.5rem;
  color: #b9d6f2;

  @media (max-width: 1110px) {
    font-size: 1rem;
  }
`;