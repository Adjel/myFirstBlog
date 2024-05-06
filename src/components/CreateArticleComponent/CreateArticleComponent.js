import React, { useContext, useState } from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY, FONTWEIGHT } from "../../Constants";
import { ArticlesContext } from "../ArticlesProvider";
import { UserContext } from "../UserProvider";

const url = "https://jsonplaceholder.typicode.com/posts/";

function CreateArticleComponent() {
  const { postArticle } = useContext(ArticlesContext);
  const { getUserIdByEmail } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <FormWrapper>
        <Form onSubmit={(event) => submittedArticle(event)}>
          <Label htmlFor="email">Ton email</Label>
          <FormInput
            type="email"
            name="email"
            id="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <FormDivider />
          <Label htmlFor="title">Le titre de ton article</Label>
          <FormInput
            type="text"
            name="title"
            id="title"
            required
            onChange={(event) => setTitle(event.target.value)}
          />
          <FormDivider />
          <Label htmlFor="content">Le contenu de ton article</Label>
          <TextArea
            type="text"
            name="content"
            id="content"
            required
            onChange={(event) => setContent(event.target.value)}
          />
          <FormDivider />
          <SubmitButton type="submit" value="poster">
            Poster
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Wrapper>
  );

  async function submittedArticle(event) {
    event.preventDefault();
    const article = {
      title: title,
      body: content,
      userId: getUserIdByEmail(email),
    };
    postArticle(article);
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${36 / 16}rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: ${16 / 16}rem;
  background: ${COLORS.Gray.buttonLightGray};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${16 / 16}rem;
  padding: ${24 / 16}rem 0;
`;

const Label = styled.label`
  font-style: ${FONTFAMILY.lato};
  font-weight: ${FONTWEIGHT.normal};
  text-transform: uppercase;
  color: ${COLORS.Gray.buttonDarkGray};
  letter-spacing: 0.1rem;
`;

const FormInput = styled.input`
  border: 1px solid ${COLORS.Gray.buttonLightGray};
  width: 90%;
  min-height: ${36 / 16}rem;
  border-radius: 3px;

  &:focus {
    outline: none;
    border: 2px solid ${COLORS.primary};
  }
`;

const TextArea = styled.textarea`
  border: 0.5px solid ${COLORS.Gray.buttonLightGray};
  width: 90%;
  min-height: ${138 / 16}rem;
  border-radius: 3px;

  &:focus {
    outline: none;
    border: 2px solid ${COLORS.primary};
  }
`;

const SubmitButton = styled.button`
  width: ${106 / 16}rem;
  height: ${48 / 16}rem;
  background: black;
  border: none;
  font-style: ${FONTFAMILY.lato};
  font-weight: ${FONTWEIGHT.normal};
  text-transform: uppercase;
  color: white;
  border-radius: 2px;

  &:hover {
    background: white;
    border: 1px solid ${COLORS.Gray.buttonDarkGray};
    color: ${COLORS.primary};
  }
`;

const FormDivider = styled.div`
  width: 85%;
  height: 0.5px;
  background: ${COLORS.Gray.darkGray};
  margin: ${16 / 16}rem 0;
`;

export default CreateArticleComponent;
