import React from "react";
import {
  ProjectMainTitle,
  ProjectWrapper,
  ProjectContainer,
  ProjectImg,
  ProjectContent,
  ProjectHeading,
  ProjectTitle,
  ProjectStackList,
  ProjectStackItem,
  ProjectDesc,
  ProjectLinkList,
  ProjectLabel,
  ProjectLive,
} from "./ProjectElements";
import pokedex from "../../assets/images/pokedexSite.png";
import donation from "../../assets/images/donationSite.png";
import tuition from "../../assets/images/tuitionSite.png";

const Project = () => {
  return (
    <ProjectWrapper id="work">
      <ProjectMainTitle data-aos="fade-right">Some things I've developed.</ProjectMainTitle>
      <ProjectContainer data-aos="fade-up">
        <ProjectImg src={donation} />
        <ProjectContent>
          <ProjectHeading>
            <ProjectTitle>Donation Site</ProjectTitle>
            <ProjectStackList>
              <ProjectStackItem>JavaScript</ProjectStackItem>
              <ProjectStackItem>PHP</ProjectStackItem>
            </ProjectStackList>
          </ProjectHeading>
          <ProjectDesc>
            A minimalist website that allows you to give donations using
            Stripe's payment platform. PHP used for server-side validation.
          </ProjectDesc>
          <ProjectLinkList>
            <ProjectLabel>private</ProjectLabel>
          </ProjectLinkList>
        </ProjectContent>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-up">
        <ProjectImg src={tuition} />
        <ProjectContent>
          <ProjectHeading>
            <ProjectTitle>Blossom in Tuition</ProjectTitle>
            <ProjectStackList>
              <ProjectStackItem>React</ProjectStackItem>
              <ProjectStackItem>Headless CMS</ProjectStackItem>
            </ProjectStackList>
          </ProjectHeading>
          <ProjectDesc>
            Blossom in Tuition is a simple SPA application to showcase
            information for a client. Wordpress was used as a headless CMS to
            manage content.
          </ProjectDesc>
          <ProjectLinkList>
            <ProjectLabel>private</ProjectLabel>
          </ProjectLinkList>
        </ProjectContent>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-up">
        <ProjectImg src={pokedex} />
        <ProjectContent>
          <ProjectHeading>
            <ProjectTitle>Pokédex</ProjectTitle>
            <ProjectStackList>
              <ProjectStackItem>JavaScript</ProjectStackItem>
              <ProjectStackItem>Sass</ProjectStackItem>
            </ProjectStackList>
          </ProjectHeading>
          <ProjectDesc>
            Search for your favorite pokemon. Data pulled from PokeAPI.
          </ProjectDesc>
          <ProjectLinkList>
            <ProjectLabel>public</ProjectLabel>
            <ProjectLive
              target="_blank"
              href="https://adoring-davinci-b90967.netlify.app/"
            >
              View Website
            </ProjectLive>
          </ProjectLinkList>
        </ProjectContent>
      </ProjectContainer>
    </ProjectWrapper>
  );
};

export default Project;
