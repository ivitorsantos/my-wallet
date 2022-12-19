import styled from 'styled-components'

export const Container = styled.div`
    grid-area: AS;

    background-color:${props => props.theme.colors.primary};
    color:${props => props.theme.colors.white};
    padding-left:20px;

    border-right: solid 0.7px ${props => props.theme.colors.gray};

`
export const Header = styled.header`
    height:70px;
    display:flex;
    align-items:center;

`
export const LogoImg = styled.img`

    height:40px;
    width:40px;

`
export const MenuContainer = styled.nav`
    display:flex;
    flex-direction:column;

    margin-top:30px;

`

export const MenuItemLink = styled.a`

    display:flex;
    align-items:center;

    color: ${props => props.theme.colors.info};
    text-decoration:none;
    margin: 7px 0px;

    &:hover {
        opacity:.4;
        transition: opacity 1s;
    }

    > svg {
        font-size:19px;
        margin-right:8px;
    }

`
export const Tittle = styled.h3`

    color:${props => props.theme.colors.white};
    margin-left:10px;

`