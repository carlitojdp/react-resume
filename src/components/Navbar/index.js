import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  HeaderContainer,
  NavbarContainer,
  HeaderLogo,
  MobileIcon,
  NavbarList,
  NavItem,
  NavLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({handleIsOpen}) => {
  const toggleScrollHome = () => {
    scroll.scrollToTop();
  };

  return (
    <HeaderContainer>
      <NavbarContainer>
        <HeaderLogo to="/" onClick={toggleScrollHome}>
          Carlito
        </HeaderLogo>
        <MobileIcon onClick={handleIsOpen}>
          <FaBars />
        </MobileIcon>
        <NavbarList>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={350}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="work"
              smooth={true}
              duration={350}
              spy={true}
              exact="true"
              offset={-80}
            >
              Work
            </NavLink>
          </NavItem>
        </NavbarList>
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Navbar;
