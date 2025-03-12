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
import { motion } from "framer-motion";

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
    <HomeContainer id="home">
      <TitleHome>
        <span ref={typedEl} className="element"></span>
      </TitleHome>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hola, soy <span>FULL STACK DEVELOPER</span>.
      </motion.h1>
      <br /> Bienvenido a mi portfolio.
      <HomeText>
        Si deseas contactar conmigo escríbeme a
        <a href="mailto:velazquez.alan14@gmail.com">
          velazquez.alan14@gmail.com
        </a>
      </HomeText>
      <ButtonHome>
        <a href="/Alan Velazquez CV.pdf" download="CV ALAN.pdf">
          Descargar CV
        </a>
      </ButtonHome>
      <Contact>Conéctate conmigo en cualquiera de estas plataformas:</Contact>
      <SocialLinks />
    </HomeContainer>
  );
};

export default Home;
