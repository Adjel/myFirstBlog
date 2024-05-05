import React, { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import styled from "styled-components";
import OptionMenu from "../OptionMenu/OptionMenu";

function HamburgerButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <ButtonWrapper onClick={handleMenu}>
      <CgMenu />
      <OptionMenu isMenuOpen={isMenuOpen} onDissmis={handleMenu} />
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  background: none;
`;
export default HamburgerButton;
