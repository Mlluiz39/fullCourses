import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const RepositoryItem = ({ name, fullName }) => {
  const { githubState } = useGithub();
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink href={`${githubState.user.html_url}/${name}`} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
