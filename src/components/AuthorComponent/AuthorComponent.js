import React from "react";
import styled from "styled-components";
import { FONTSIZE, FONTWEIGHT } from "../../Constants";

function AuthorComponent({ user }) {
  return (
    <Wrapper>
      <Header>
        {user?.username ? (
          <>
            {user.company.name && user.company.catchPhrase ? (
              <>
                <Auth>{user?.username}</Auth>
                <p style={{ margin: `${18 / 18}rem 0 0 0` }}>
                  from {user.company.name}
                </p>
                <p>
                  "<cite>{user.company.catchPhrase}</cite>"
                </p>
              </>
            ) : (
              <p>{user?.username}</p>
            )}
          </>
        ) : (
          <p>Anonyme</p>
        )}
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Auth = styled.h2`
  style: none;
  font-weight: ${FONTWEIGHT.normal};
  font-size: ${FONTSIZE.h1};
  margin: ${18 / 18}rem 0 0 0;
  text-align: center;
`;

export default AuthorComponent;
