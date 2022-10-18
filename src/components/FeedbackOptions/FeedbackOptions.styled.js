import styled from "styled-components";


export const OptionButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: white;
    border: ${p => p.theme.borders.card};
    border-radius: ${p => p.theme.radii.md};
    box-shadow: ${props => props.theme.shadows.slim};
    text-transform: uppercase;
    &:hover{
        box-shadow: ${props => props.theme.shadows.normal};
        border: ${props => props.theme.borders.item};
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};;
    }
`;