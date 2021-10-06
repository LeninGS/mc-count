import styled from "styled-components";

export const Hero = styled.div`
    width: 100%;
    height: 100vh;    
    background-image: url('/Background_GIF.gif');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: auto;
`;

export const Navbar = styled.div`
    width: 85%;
    height: 15%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    -webkit-tap-highlight-color: transparent;
    gap:5%;
`;

export const Samples = styled.div`
    display: flex;
    position: absolute;
    top: 70%;
    right: 8%;
    left: 10%; 
    flex-direction: row;
    justify-content: space-evenly;  
    visibility: hidden;
`;

export const Btn = styled.div`

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    color: #fbfcfd;
    position: absolute;
    top: 20%;
    left: 8%;  
    z-index: 0;
    width: 60%;
`;

export const Titulo = styled.div`

`;

export const SubTitulo = styled.div`

`;

export const SideBar = styled.div`
    width: 60px;
    height: 100vh;
    background: transparent;
    position: fixed;
    right: 10px;
    top: 0;
`;

export const Menu = styled.div`

`;

export const Pickaxe = styled.div`

`;
