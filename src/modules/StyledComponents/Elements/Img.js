import styled from 'styled-components';
import cat from '../../Images/cat.png';

const Img = styled.div`
    background-image: url(${cat});
    height: 100px;
    width: 80px;
    background-size: contain;
`;

export default Img;