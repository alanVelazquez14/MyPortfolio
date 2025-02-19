import styled from "styled-components";

export const TechOverlay = styled.div`
  position: absolute;
  padding: 10px;
  border-radius: 8px;
  top: 0;
  left: 0;
  width: 95%;
  height: 95%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const CardProjectContainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px;
  border-radius: 8px;
  background-color: #1c2541;
  box-shadow: 2px 4px rgba(0, 0, 0, 1);

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s;
  }

  &:hover ${TechOverlay} {
    opacity: 1;
  }
`;

export const TitleCardProject = styled.h1`
  text-align: center;
  font-size: 1rem;
  color: #ffffff;
`;

export const ImgCardProject = styled.img`
  height: 200px;
  width: 300px;
  border-radius: 8px;
  margin-top: 30px;
`;

export const DescriptionCardProject = styled.p`
  font-size: 0.7rem;
  color: #ffffff;
  font-weight: 200;
  margin-top: 30px;
`;

export const UrlCardProjectContainer = styled.a`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  margin-top: 30px;
  width: 70%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: auto;
  &:hover {
    color: brown;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    margin-left: 5px;

    &:hover {
      color: brown;
    }
  }
`;

export const TechBadge = styled.span`
  background-color: #4caf50;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

export const DescriptionCardProjectContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
