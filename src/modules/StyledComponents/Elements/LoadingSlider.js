import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        background: cyan;
        box-shadow: 0 0 10px cyan;
        width: 20px;
        left: 17%;
    }
    25% {
        background: violet;
        box-shadow: 0 0 10px violet;
        width: 200px;
        left: 17%;
    }
    50% {
        background: greenyellow;
        box-shadow: 0 0 10px greenyellow;
        width: 20px;
        left: 28.5%;
    }
    75% {
        background: greenyellow;
        box-shadow: 0 0 10px greenyellow;
        width: 200px;
        left: 17%;
    }
    100% {
        background: red;
        box-shadow: 0 0 10px red;
        width: 20px;
        left: 17%;
    }
`;

const LoadingSliderComp = styled.div`
    position: absolute;
    margin: 15px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background: aqua;
    box-shadow: 0 0 10px aqua;
    animation: ${animation} 3s ease infinite;
`;

export default LoadingSliderComp;