import React from "react";
import {
  SidebarContainer,
  SidebarIcon,
  CloseIcon,
  SidebarList,
  SidebarLink,
  SidebarResumeWrapper,
  SidebarResume,
} from "./SidebarElements";

import CV from "../../assets/docs/CV.pdf";
const Sidebar = ({ isOpen, handleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleIsOpen}>
      <SidebarIcon onClick={handleIsOpen}>
        <CloseIcon />
      </SidebarIcon>
      <SidebarList>
        <SidebarLink
          to="about"
          smooth={true}
          duration={350}
          spy={true}
          exact="true"
          offset={-80}
          onClick={handleIsOpen}
        >
          About
        </SidebarLink>
        <SidebarLink
          to="work"
          smooth={true}
          duration={350}
          spy={true}
          exact="true"
          offset={-80}
          onClick={handleIsOpen}
        >
          Work
        </SidebarLink>
        <SidebarResumeWrapper>
          <SidebarResume to={CV} target="_blank">
            resume
          </SidebarResume>
        </SidebarResumeWrapper>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
