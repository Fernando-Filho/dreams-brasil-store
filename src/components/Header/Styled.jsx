import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* font-size: 20px; */
`

export const Logo = styled.img`
    height: 30px;
    width: 30px;
`

export const Link = styled.a`

    text-decoration: none;
    color: inherit;

    &:hover{
        transition: 2s;
        border-bottom: solid 1px
    }
`

export const SideBar = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 16px;
`