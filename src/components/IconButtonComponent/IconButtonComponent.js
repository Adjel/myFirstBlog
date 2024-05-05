import React, { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { CgShare } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { COLORS } from "../../Constants";

const getIcon = (iconId) => {
  switch (iconId) {
    case "search":
      return <Search title={`${iconId} button icon`} />;
    case "close":
      return <Close title={`${iconId} button icon`} />;
    case "share":
      return <Share title={`${iconId} button icon`} />;
    default:
      throw new Error("You need to provide an id to use this component");
  }
};

function IconButtonComponent({ iconId, onClick }) {
  return (
    <IconButtonWrapper onClick={onClick}>{getIcon(iconId)}</IconButtonWrapper>
  );
}

const IconButtonWrapper = styled.button`
  border: none;
  background: none;
  color: ${COLORS.Gray.buttonDarkGray};
`;

const Search = styled(CgSearch)`
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Close = styled(IoCloseSharp)`
  cursor: pointer;
  width: ${24 / 16}rem;
  height: ${24 / 16}rem;
  color: ${COLORS.Gray.buttonDarkGray};

  &:hover {
    color: black;
  }
`;

const Share = styled(CgShare)`
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export default IconButtonComponent;
