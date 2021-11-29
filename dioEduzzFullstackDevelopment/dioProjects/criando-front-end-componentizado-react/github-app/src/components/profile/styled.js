import styled from "styled-components";

export const WrapperContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 30px;
  max-width: 650px;
  background-color: #fff;

  @media (max-width: 360px)
{
  flex-direction: column;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 auto;
  
  
  }

`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color:#999999;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #999999;
  }

  @media (max-width: 360px){
    h1, h3, h4 {
      font-size: 14px;
    }
    
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 8px;
    text-align: center;
    color: #fff;
  }

  @media (max-width: 360px){
    h4 {
      margin: 0 auto;
      font-size: 14px;
    }
    
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #fff;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #6081FA;
    font-weight: bold;
  }

  @media (max-width: 360px){
    a {
      font-size: 14px;
    }
    
  }

`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
