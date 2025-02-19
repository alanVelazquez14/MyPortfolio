import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 165px;
  margin-left: 400px;

  @media (max-width: 1280px) {
    margin-left: 300px;
  }

  @media (max-width: 1110px) {
    margin-left: 250px;
  }

`;

export const SkillsTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 24px;
  
  @media (max-width: 1110px) {
    font-size: 1.8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  align-items: start;
  margin-top: 20px;
  gap: 150px;
  text-align: center;

  @media (max-width: 1165px) {
    gap: 50px;
  }

  @media (max-width: 1110px) {
    gap: 20px;
  }
`;

export const SubTitleSkills = styled.h2`
  font-size: 2rem;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1110px) {
    font-size: 1.5rem;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;

    @media (max-width: 1110px) {
      margin-bottom: 5px;
    }
  }

  li span {
    margin-right: 10px;
    font-size: 1.5rem;
    color: #f1f1f1;

    @media (max-width: 1110px) {
      font-size: 1rem;
    }
  }
`;

export const InfoText = styled.p`
  font-size: 1rem;
  margin-top: 170px;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 500;
  text-align: center;
  color: #b9d6f2;
  font-weight: bold;

  a {
    margin-left: 10px;
    color: #b9d6f2;

    &:hover {
      color: brown;
    }
  }
`;
