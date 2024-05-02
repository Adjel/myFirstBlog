import React from "react";
import { CgMenu } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import { CgShare } from "react-icons/cg";

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

function IconButtonComponent({ iconId }) {
  return <div>{getIcon(iconId)}</div>;
}

export default IconButtonComponent;
