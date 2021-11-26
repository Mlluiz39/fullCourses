import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;
`
export const WrapperInfoUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
margin-left: 10px;
height: 200px;

h1 {
  font-size: 2rem;
  font-weight: bold;
}

h3 {
  font-size: 1.3rem;
  font-weight: bold;
}

h4 {
  font-size: 1rem;
  font-weight: bold;
}
`

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;

div {
  margin: 8px;
  text-align: center;
}
`

export const WrapperUsername = styled.div`
display: flex;
align-items: center;
margin-top: 10px;

h3 {
margin-right: 8px;
}

a {
  text-decoration: none;
  color: #1010f6;
  font-size: 1rem;
  font-weight: bold;
}
`

export const WrapperImage = styled.img`
border-radius: 50%;
width: 200px;
margin: 8px;
`