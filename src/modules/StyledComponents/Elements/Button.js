import styled, { css } from 'styled-components';

const ButtonComp = styled.button`
    width: 100px;
    height: 30px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;

${props => props.primary && css`
    background: palevioletred;
    width: 120px;
    color: white;
`}`;

export default ButtonComp;