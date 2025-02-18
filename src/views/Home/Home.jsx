import React, { useEffect, useRef } from "react";
import {
  ButtonHome,
  Contact,
  HomeContainer,
  HomeText,
  TitleHome,
} from "./HomeStyles";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Typed from "typed.js";

const Home = () => {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedEl) {
      typedEl.current.innerHTML = "";
    }

    typedInstance.current = new Typed(typedEl.current, {
      strings: ["ALAN VELAZQUEZ"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1500,
      startDelay: 500,
    });
    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <HomeContainer>
      <TitleHome>
        <span ref={typedEl} className="element"></span>
      </TitleHome>
      <div>
        Hi, I'm a <span>FULL STACK DEVELOPER.</span>
      </div>
      <br /> Welcome to my portfolio.
      <HomeText>
        If you want to get in touch with me, write to me at{" "}
        <a
          href="mailto:velazquez.alan14@gmail.com"
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          velazquez.alan14@gmail.com
        </a>
      </HomeText>
      <ButtonHome>
        <a href="/CV ALAN.pdf" download="CV ALAN.pdf">
          Download CV
        </a>
      </ButtonHome>
      <Contact>Connect with me on any of these platforms:</Contact>
      <SocialLinks />
    </HomeContainer>
  );
};

export default Home;
