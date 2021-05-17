import React from "react";
import {
  FooterContainer,
  FooterCopyRight,
  FooterLinks,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCopyRight>Carlito Jr. Dela Pena ©</FooterCopyRight>
      <FooterLinks>
        <FooterLink
          target="_blank"
          href="https://github.com/carlito-jdp?tab=repositories"
        >
          Github
        </FooterLink>
        <FooterLink
          target="_blank"
          href="https://www.linkedin.com/in/carlito-jr-dela-pena-21957616b/"
        >
          LinkedIn
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
