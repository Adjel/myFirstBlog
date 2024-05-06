import React, { useContext } from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa6";
import IconButtonComponent from "../IconButtonComponent/IconButtonComponent";
import Divider from "../Divider/Divider";
import HamburgerButton from "../HamburgerButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Link style={{ color: "black" }} to="/">
          <Icon title="the brand icon, seems to be the react logo" />
        </Link>
        <IconButtonsWrapper>
          <IconButtonComponent iconId={"share"} />
          <IconButtonComponent iconId={"search"} />
          <HamburgerButton />
        </IconButtonsWrapper>
      </HeaderWrapper>
      <Divider />
    </>
  );
}

// the min-height correspon to the Icon size
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.3rem;
  height: ${36 / 16}rem;
  padding: 0 ${24 / 16}rem;
  margin: ${8 / 16}rem 0;
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
