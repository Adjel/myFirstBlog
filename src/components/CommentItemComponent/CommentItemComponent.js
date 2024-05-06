import React from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT } from "../../Constants";
import { RiChatDeleteLine } from "react-icons/ri";

function CommentItemComponent({ name, content, onClick }) {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <DeleteIconButton onClick={onClick} />
          <Name>{name}</Name>
        </HeaderWrapper>
        <Content>{content}</Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 70%;
  gap: ${8 / 16}rem;
  padding: ${16 / 16}rem ${8 / 16}rem ${16 / 16}rem ${48 / 16}rem;
  border-bottom: 1px solid ${COLORS.Gray.buttonLightGray};
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DeleteIconButton = styled(RiChatDeleteLine)`
  align-self: flex-end;
  margin-right: ${50 / 16}rem;
  color: ${COLORS.Gray.buttonDarkGray};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const Name = styled.div`
  font-weight: ${FONTWEIGHT.bold};
  font-style: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.comments.user};
  color: black;
  text-transform: uppercase;
`;

const Content = styled.div`
  font-weight: ${FONTWEIGHT.five};
  font-style: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.comments.content};
  color: ${COLORS.font.darkGray};
`;

export default CommentItemComponent;
