import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import {Link as LinkRoute} from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  width: 320px;
  height: 100%;
  background: white;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 400x) {
    width: 100%;
  }
`;

export const SidebarIcon = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  background: transparent;
  border: transparent;
  outline: none;
  cursor: pointer;
  font-size: 4rem;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const SidebarList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: 2rem;
  letter-spacing: 1.8px;
  text-decoration: none;
  list-style: none;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin: 0.3em 0;
  margin-top: -2em;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarResumeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SidebarResume = styled(LinkRoute)`
  font-family: var(--font-family-bold);
  font-weight: var(--font-weight-bold);
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  padding: .4em 1.8em;
  cursor: pointer;
`