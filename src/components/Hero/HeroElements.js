import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const HeroContainer = styled.div`
  height: calc(100vh - 80px);
  height: 100%;
  background: var(--color-bg-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0em 2em;
  margin-top: 2em;
  margin-bottom: 4em;

  @media screen and (min-width: 767px) {
    padding: 4em 4em;
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    height: 680px;
    margin-top: 0;
    padding-top: 0;
  }
`;

export const HeroContent = styled.div`
  @media screen and (min-width: 1000px) {
    order: 1;
    margin-left: 8em;
  }
`;

export const HeroSubtitle = styled.h3`
  font-size: clamp(1.4rem, 2vw, 1.75rem);
`;

export const HeroTitle = styled.h2`
  font-size: clamp(3.6rem, 3.4vw, 6.8rem);
  line-height: 1.2;
  margin-bottom: 0.5em;
`;

export const HeroDesc = styled.p`
  max-width: 480px;
  font-size: clamp(1.55rem, 2vw, 1.8rem);
  line-height: 1.6;
  letter-spacing: 1.2px;
  text-align: justify;
  margin-bottom: 0.75em;
`;

export const HeroTitleAccent = styled.h3`
  font-size: 3rem;
`;

export const HeroContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.5em;

  @media screen and (min-width: 360px) {
    flex-direction: row;
  }
`;

export const ContactButton = styled(LinkRoute)`
  width: 155px;
  align-self: flex-start;
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: 1.55rem;
  color: ${({ bgBright }) => (bgBright ? "white" : "black")};
  background: ${({ bgBright }) => (bgBright ? "black" : "white")};
  border: 1px solid ${({ bgBright }) => (bgBright ? "white" : "black")};
  letter-spacing: 1px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  margin-top: 1em;
  padding: 0.6em 1.6em;
  transition: 0.2s ease-in-out;

  &:hover {
    background: var(--color-contact-accent);
    transform: scale(1.02);
  }

  @media screen and (min-width: 360px) {
    margin-left: ${({ bgBright }) => (bgBright ? "1em" : "0em")};
  }
`;

export const HeroImg = styled.img`
  display: block;
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
`;
