import React, { useContext, useEffect, useState } from "react";
import { FONTFAMILY, COLORS, FONTSIZE, FONTWEIGHT } from "../../Constants";
import styled from "styled-components";
import { ArticlesContext } from "../ArticlesProvider/ArticlesProvider";
import IconButtonComponent from "../IconButtonComponent/IconButtonComponent";
import { keyframes } from "styled-components";

/**
 *
 * @param {onClick} param2
 * @returns
 */
function OptionMenu({ isMenuOpen, onDissmis }) {
  const { article, deletArticle } = useContext(ArticlesContext);
  return (
    <Menu style={{ "--isOpen": isMenuOpen ? "flex" : "none" }}>
      <Overlay>
        <DismissButtonWrapper>
          <IconButtonComponent iconId={"close"} onClick={onDissmis} />
        </DismissButtonWrapper>
        <OptionsWrapper>
          <li>
            {article.id == undefined ? (
              /* we are in article, so we can delete it */
              <AdministrationButton>Ajouter un article</AdministrationButton>
            ) : (
              /* because we are not in article when we opened the menu we are in home with article list,
          we can instead add an article */
              <AdministrationButton onClick={deletArticle}>
                Supprimer
              </AdministrationButton>
            )}
          </li>
        </OptionsWrapper>
      </Overlay>
    </Menu>
  );
}

// Create the keyframes
const inAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const Menu = styled.menu`
  display: var(--isOpen);
  justify-content: flex-end;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0;
  margin: 0;
`;

const DismissButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${16 / 16}rem ${28 / 16}rem 0 0;
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${20 / 16}rem;
  height: 100%;
  width: 45%;
  padding: 0;
  margin: 0;
  background: white;

  animation: ${inAnimation} 0.5s ease-in-out;
`;

const OptionsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
`;

const AdministrationButton = styled.button`
  background: none;
  border: none;
  text-transform: uppercase;
  color: ${COLORS.Gray.buttonDarkGray};
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.buttonMenu};
  font-weight: ${FONTWEIGHT.six};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export default OptionMenu;
