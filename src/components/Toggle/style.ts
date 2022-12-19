import styled from 'styled-components'

import Switch, {ReactSwitchProps} from 'react-switch'


export const Container = styled.div`
    display:flex;
    align-items:center;

`
export const ToggleLabel = styled.span`
    color:${props => props.theme.colors.white}
    font-size: 5px;

    `
export const ToggleButton = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.secondary,
        offColor: theme.colors.secondary,
        checkedIcon: false,
        uncheckedIcon: false,
        height:20,
        width:40,
    }))<ReactSwitchProps>`
        margin:0 10px;
    `
