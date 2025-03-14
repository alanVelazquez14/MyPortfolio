import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  font-size: 2rem;
  margin-left: 400px;

  span {
    font-weight: 800;
  }

  @media (max-width: 1280px) {
    margin-left: 300px;
  }

  @media (max-width: 1110px) {
    margin-left: 250px;
    font-size: 1.3rem;
}
`;

export const TitleHome = styled.h1`
  font-size: 3rem;
  color: #0353a4;
  font-weight: 700;
`;

export const HomeText = styled.p`
  font-size: 1rem;
  color: #0654a1;
  font-weight: 500;
  margin-top: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    margin-left: 10px;
    
    &:hover {
      color: brown;
    }
  }
`;

export const ButtonHome = styled.button`
  font-family: "Montserrat";
  width: 200px;
  margin-top: 50px;
  background-color: #0353a4;
  color: #b9d6f2;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: brown;
  }

  a {
    color: #b9d6f2;
    text-decoration: none;
  }
`;

export const Contact = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 100px;
`;
