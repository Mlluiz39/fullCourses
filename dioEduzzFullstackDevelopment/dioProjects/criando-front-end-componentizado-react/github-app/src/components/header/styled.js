import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

export const HeaderSection = styled.header`
    width: 580px;
    height: 130px;
    background-color: rgba(255,255,255, .2);
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (max-width: 360px) {
    width: 95%;
  }
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #E5E5E5;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    background-color: #fff;
    color: #444;
    transition: .4s ease;
    &:focus {
        outline: none;
        width: 90%;
        transition: .6s ease;
    }

    @media (max-width: 360px) {
    width: 95%;
  }
`

export const HeaderSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #FF7A00;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;
    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`