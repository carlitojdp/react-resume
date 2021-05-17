import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  padding: 4em 2em;

  @media screen and (min-width: 568px) {
    padding: 4em;
  }

  @media screen and (min-width: 1280px){
    flex-direction: row;
    height: 720px;
  }
`;

export const AboutContent = styled.div`
  max-width: 580px;

  @media screen and (min-width: 1280px){
    margin-right: 8em;
  }
`;

export const AboutTitle = styled.h2`
  font-size: clamp(2.25rem, 2vw, 3.2rem);
  margin-bottom: 1em;
`;

export const AboutDesc = styled.p`
  font-size: clamp(1.55rem, 2vw, 1.8rem);
  line-height: 1.65;
  letter-spacing: 1.275px;
  text-align: justify;
  margin-bottom: 1em;
`;

export const AboutStackList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;

  @media screen and (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutStackItem = styled.li`
  position: relative;
  font-size: 1.65rem;
  margin-bottom: 0.55em;
  padding-left: 1.25em;
  &::before {
        position: absolute;
        content: "▹";
        left: 0;
        color: var(--color-skills-accent);
`;

export const AboutImg = styled.img`
  width: 100%;
  max-width: 480px;
`;
