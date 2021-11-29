import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 10px auto;
  width: 950px;
  height: 110px;
  align-content: center;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0;
  color: #fff;

  @media (max-width: 360px) {
    font-size: 16px;
  }
  
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  margin: 8px 0;
  color: #fff;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #6081FA;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;
