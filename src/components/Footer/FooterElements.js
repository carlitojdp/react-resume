import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4em;
  background: var(--color-bg-secondary);

  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterCopyRight = styled.p`
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: clamp(1.6rem, 2vw, 2rem);
  margin-bottom: 0.5em;
`;
export const FooterLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const FooterLink = styled.a`
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: clamp(1.6rem, 2vw, 2rem);
  color: var(--color-skills-accent);
  text-decoration: none;
  padding: 0.4em 1em;
  margin-right: 0.5em;
`;
