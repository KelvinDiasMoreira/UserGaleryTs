import styled from "styled-components";

interface Props {
  isSelected: boolean,
}

export const Container = styled.div`
height: 100vh;
`
export const TitleNavBar = styled.h1`
font-size: 2rem;
color: #A8A8B3;
`

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 1rem 2rem 3rem 2rem;
`

export const DivCloseSession = styled.div`
background-color: #DBDCDD;
padding: 1rem;
width: 17rem;
border-radius: 0.3rem;
cursor: pointer;
transition: 0.5s;
&:hover {
    filter: brightness(0.8);
}
`

export const TitleDivCloseSession = styled.h2`
text-align: center;
color: #737380;
font-size: 1.5rem;
`
export const TitleDiv = styled.div`
text-align: center;
flex-grow: 1;
justify-content: center;
margin-left: 10rem;
`
export const ContainerTitle= styled.div`
display: flex;
`
export const HeaderTitleChange = styled.h1`
color: #737380;
text-align: center;
font-size: 2rem;

`

export const DivIconsChangeMode = styled.div`
margin-bottom: 3rem;
margin-right: 2rem;
`

export const ButtonImages = styled.button <Props>`
width: 4rem;
height: auto;
cursor: pointer;
transition: 0.5s;
align-self: flex-end;
${({isSelected }) => isSelected ? "filter: brightness(0.8)" : "filter: brightness(0);"}
&:hover {
    filter: brightness(0.8);
  }
  svg{
    width: 2.2rem;
    height: auto;
  }
`