import React from 'react'

import Switch from 'react-switch'

import { Container, ToggleLabel, ToggleButton } from './style'

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleButton
            checked
            onChange={() => console.log('mudou')}/>

        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle