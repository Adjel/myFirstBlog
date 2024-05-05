import React from "react";
import { CgMenu } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import { CgShare } from "react-icons/cg";
import styled from "styled-components";

const getIcon = (iconId) => {
  switch (iconId) {
    case "hamburgerMenu":
      return <CgMenu />;
    case "search":
      return <CgSearch />;
    case "share":
      return <CgShare />;
    default:
      throw new Error("You need to provide an id to use this component");
  }
};

function IconButtonComponent({ iconId, onClick }) {
  return <ButtonWrapper onClick={onClick}>{getIcon(iconId)}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  border: none;
  background: none;
`;

export default IconButtonComponent;
