import styled from "styled-components";

export const ProjectWrapper = styled.div``;
export const ProjectMainTitle = styled.h2`
  font-size: clamp(2.8rem, 2.2vw, 2.8rem);
  padding: 1.5em 1em;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 2em;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin: 1em 4em;
  }
`;
export const ProjectImg = styled.img`
  width: 100%;
  max-width: 580px;
  margin-bottom: 2.8em;
  box-shadow: rgba(82, 91, 118, .55) 3px 3px, rgba(52, 58, 64, 0.4) 6px 6px, rgba(52, 58, 64, 0.2) 9px 9px, rgba(52, 58, 64, 0.1) 12px 12px;;
  }

  @media screen and (min-width: 1280px) {
    max-width: 60%;
  }
`;
export const ProjectContent = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    max-width: 35%;
    align-self: flex-start;
    margin-top: 1em;
    margin-left: 6em;
  }
`;
export const ProjectHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;

  @media screen and (min-width: 1280px) {
    margin-bottom: 2em;
  }
`;
export const ProjectTitle = styled.h2`
  font-size: clamp(1.6rem, 2vw, 2rem);
  margin-right: 1em;
`;

export const ProjectStackList = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
`;

export const ProjectStackItem = styled.li`
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: clamp(1.35rem, 2vw, 1.55rem);
  background: var(--color-bg-secondary);
  padding: 0.25em 1em;
  margin-right: 0.5em;
  margin-bottom: 0.75em;
`;

export const ProjectDesc = styled.p`
  font-size: 1.55rem;
  letter-spacing: 0.5px;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 0.75em;
`;
export const ProjectLinkList = styled.ul`
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: clamp(1.2rem, 2vw, 1.45rem);
  letter-spacing: 0.5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const ProjectLabel = styled.p``;
export const ProjectLive = styled.a`
  text-decoration: none;
  color: var(--color-primary);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transform: scale(1.02);
  }
`;
