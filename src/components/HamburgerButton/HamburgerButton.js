import React, { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import styled from "styled-components";
import OptionMenu from "../OptionMenu/OptionMenu";
import { COLORS } from "../../Constants";

function HamburgerButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log({ isMenuOpen });
  }

  return (
    <Wrapper>
      <MenuButton onClick={handleMenu}></MenuButton>
      <OptionMenu isMenuOpen={isMenuOpen} onDissmis={handleMenu} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MenuButton = styled(CgMenu)`
  border: none;
  background: none;
  cursor: pointer;
  color: ${COLORS.Gray.buttonDarkGray};

  &:hover {
    color: black;
  }
`;
export default HamburgerButton;
