import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa6";
import IconButtonComponent from "../IconButtonComponent/IconButtonComponent";

function Header() {
  return (
    <HeaderWrapper>
      <Icon title="the brand icon, seems to be the react logo" />
      <IconButtonsWrapper>
        <IconButtonComponent iconId={"share"} />
        <IconButtonComponent iconId={"search"} />
        <IconButtonComponent iconId={"hamburgerMenu"} />
      </IconButtonsWrapper>
    </HeaderWrapper>
  );
}

// the min-height correspon to the Icon size
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 3.3rem;
  height: ${36 / 16}rem;
  padding: 0 ${24 / 16}rem;
`;

const Icon = styled(FaReact)`
  width: 3.3em;
  height: 3.3em;
`;

const IconButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${8 / 16}rem;
`;

export default Header;
