import React from "react";
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Tittle} from "./style"

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

const logo: string = require('../../assets/logo.svg').default

const Aside: React.FC = () => {
    return(

        <Container>
            <Header>
                <LogoImg src={logo} alt="Logo da minha carteira"/>
                <Tittle>Minhas Finanças</Tittle>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#"><MdDashboard/> Dashboard</MenuItemLink>
                <MenuItemLink href="#"><MdArrowUpward/> Entrada</MenuItemLink>
                <MenuItemLink href="#"><MdArrowDownward/> Saída</MenuItemLink>
                <MenuItemLink href="#"><MdExitToApp/> Sair</MenuItemLink>
            </MenuContainer>
            
        </Container>
    )
}

export default Aside