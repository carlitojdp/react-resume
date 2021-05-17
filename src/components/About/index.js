import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutDesc,
  AboutStackList,
  AboutStackItem,
  AboutImg,
} from "./AboutElements";
import profile from "../../assets/images/about.svg";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent data-aos="fade-up">
        <AboutTitle>About me</AboutTitle>
        <AboutDesc>
          Hey, I'm Carlito Jr. but feel free to call me CJ. I'm a developer for
          the web based in London.
        </AboutDesc>
        <AboutDesc>
          I graduated from Queen Mary Univeristy of London with a 2:1 Bsc degree
          in Computer Science. I enjoy making things for the web and I am
          looking to further my professional work experience and to work with
          other developers in the field.
        </AboutDesc>
        <AboutDesc>
          Here are a few technologies I've been working with recently:
        </AboutDesc>
        <AboutStackList>
          <AboutStackItem>JavaScript (ES6+)</AboutStackItem>
          <AboutStackItem>HTML & (S)CSS</AboutStackItem>
          <AboutStackItem>React</AboutStackItem>
          <AboutStackItem>PHP</AboutStackItem>
        </AboutStackList>
      </AboutContent>
      <AboutImg src={profile} data-aos="fade-up"/>
    </AboutContainer>
  );
};

export default About;
