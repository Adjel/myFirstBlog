import React from "react";
import { CgSearch } from "react-icons/cg";
import { CgShare } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

const getIcon = (iconId) => {
  switch (iconId) {
    case "search":
      return <CgSearch />;
    case "close":
      return <CgClose />;
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
