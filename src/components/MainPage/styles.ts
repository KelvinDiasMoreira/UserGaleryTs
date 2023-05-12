import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
`
export const TitleNavBar = styled.h1`
font-size: 2rem;
color: #737380;
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
    background-color: #737380;
    transition: 0.5s;
    color: #F8F8F8;
}
`

export const TitleDivCloseSession = styled.h2`
text-align: center;
color: #737380;
font-size: 1.5rem;
&:hover {
    transition: 0.5s;
    color: #F8F8F8;
}

`