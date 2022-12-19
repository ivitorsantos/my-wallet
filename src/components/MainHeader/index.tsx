import React, {useMemo} from "react";
import { Container, Profile, Welcome, UserName } from "./style"

import Toggle from "../Toggle";

import emojis from '../../utils/emoji'

const MainHeader: React.FC = () => {

    const emoji = useMemo( () => {

        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice]

    }, [])

    return(
        <Container>
            <Toggle/>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Vitor Santos</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader