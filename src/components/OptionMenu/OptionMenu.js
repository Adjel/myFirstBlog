import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ArticlesContext } from "../ArticlesProvider/ArticlesProvider";
import IconButtonComponent from "../IconButtonComponent/IconButtonComponent";

/**
 *
 * @param {onClick} param2
 * @returns
 */
function OptionMenu({ isMenuOpen, onDissmis }) {
  const { article, deletArticle } = useContext(ArticlesContext);
  return (
    <Menu style={{ "--isOpen": isMenuOpen ? "flex" : "none" }}>
      <IconButtonComponent iconId={"close"} onClick={onDissmis} />
      <Overlay>
        <OptionsWrapper>
          <li>{article ? <button>Supprimer</button> : undefined}</li>
          <li>
            {article ? undefined : (
              <button onClick={deletArticle}>Supprimer</button>
            )}
          </li>
        </OptionsWrapper>
      </Overlay>
    </Menu>
  );
}

const Menu = styled.menu`
  display: var(--isOpen);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: white;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  transform: translate(-270px, 0px);
  height: 100%;
`;

const OptionsWrapper = styled.ul``;

export default OptionMenu;
