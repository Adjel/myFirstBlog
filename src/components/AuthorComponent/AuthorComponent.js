import React from "react";

function AuthorComponent({ user }) {
  return <div>{user?.username}</div>;
}

export default AuthorComponent;
