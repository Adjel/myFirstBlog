import React from "react";
import styled from "styled-components";
import { FONTSIZE, FONTWEIGHT } from "../../Constants";

function AuthorComponent({ user }) {
  return (
    <Wrapper>
      <header>
        {user ? (
          <>
            <Auth>{user?.username}</Auth>
            <p style={{ margin: `${18 / 18}rem 0 0 0` }}>
              from {user?.company?.name}
            </p>
          </>
        ) : (
          <p>Anonyme</p>
        )}
      </header>
      <p>
        "<cite>{user?.company?.catchPhrase ?? undefined}</cite>"
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Auth = styled.h1`
  style: none;
  font-weight: ${FONTWEIGHT.normal};
  font-size: ${FONTSIZE.h1};
  margin: ${18 / 18}rem 0 0 0;
  text-align: center;
`;

export default AuthorComponent;
