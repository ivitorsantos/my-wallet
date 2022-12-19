import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};

    display:flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 35px;

    border-bottom: solid 0.7px ${props => props.theme.colors.gray};



`
export const Profile = styled.div `
    color: ${props => props.theme.colors.white}
    
`
export const Welcome = styled.div ``
export const UserName = styled.div ``