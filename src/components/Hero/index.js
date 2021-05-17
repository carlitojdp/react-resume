import React from "react";
import TextAnimation from "../Animations/TextAnimation";
import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  HeroDesc,
  HeroContactContainer,
  ContactButton,
  HeroImg,
} from "./HeroElements";
import CV from "../../assets/docs/CV.pdf";
import coding from "../../assets/images/coding.svg";

const Hero = () => {
  const handleMailTo = (e) => {
    window.location = "mailto:carlito.jdp@gmail.com";
    e.preventDefault();
  };
  return (
    <HeroContainer>
      <HeroContent data-aos="fade-left">
        <HeroSubtitle>
          <TextAnimation />
        </HeroSubtitle>
        <HeroTitle>Hi, my name is Carlito.</HeroTitle>
        <HeroDesc>
          I enjoy solving complex problems and like a good challenge. I am very keen to
          develop myself and my technical skills and willing to dive into anything; New or old. Get in touch and see how we can work together.
        </HeroDesc>
        <HeroContactContainer>
          <ContactButton bgBright={false} onClick={handleMailTo}>
            Get in touch
          </ContactButton>
          <ContactButton bgBright={true} to={CV} target="_blank">
            Resume
          </ContactButton>
        </HeroContactContainer>
      </HeroContent>
      <HeroImg src={coding} data-aos="fade-right" />
    </HeroContainer>
  );
};

export default Hero;
