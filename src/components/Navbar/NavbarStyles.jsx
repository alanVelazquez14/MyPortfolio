import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #02538a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);

  @media (max-width: 1280px) {
    width: 200px;
  }
`;

export const LinksStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;

  @media (max-width: 1110px) {
    font-size: .7rem;
  }
`;

export const Link = styled.a`
  color: #b9d6f2;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #961a1a;
  }
`;
