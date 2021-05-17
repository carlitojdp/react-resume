import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeaderContainer = styled.header`
  position: sticky;
  height: 80px;
  top: 0;
  z-index: 10;
  background: var(--color-bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  transition: 0.2s all ease;

  @media screen and (min-width: 767px) {
    padding: 0 4em;
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const HeaderLogo = styled(LinkScroll)`
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: var(--color-header);
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2.8rem;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkScroll)`
  height: 100%;
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: 1.8rem;
  letter-spacing: 1.4px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 1em;

  &.active {
    border-bottom: 2.5px solid var(--color-header);
    color: var(--color-header);
    transform: scale(1.035);
  }
`;
