import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 150px;
  margin-left: 400px;

  @media (max-width: 1280px) {
    margin-left: 300px;
  }

  @media (max-width: 1110px) {
    margin-left: 250px;
  }
`;

export const TitleAbout = styled.h1`
  font-size: 3rem;
  color: #b9d6f2;

  @media (max-width: 1110px) {
    font-size: 1.8rem;
}
`;

export const TextAboutContainer = styled.p`
  font-size: 1.5rem;
  color: #b9d6f2;
  font-weight: 500;
  margin-top: 30px;
  width: 80%;

  span {
    font-weight: 800;
  }

  @media (max-width: 1110px) {
    font-size: 1rem;
    width: 90%;
  }
`;

export const TextAbout1 = styled.p`
  color: #b9d6f2;
  margin-top: 50px;
  width: 70%;
`;

export const TextAbout2 = styled.p`
  color: #b9d6f2;
  margin-top: 70px;
  color: #006daa;
`;
