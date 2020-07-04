import styled from "styled-components";
import {gold} from "../../utils/colors";


export const LoaderWrapper = styled.div`
height: 100vh;
width: 100vw;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;
export const Vertical = styled.div`
height: 150px;
opacity: 0;
width: 30px;
border-radius: 30%;
background-color: rgba(212,175,55,0.63);
margin-right: 7px;
transform: scaleY(0);
`;
export const Slide = styled(Vertical)`
height: 174px;
transform: scaleY(0);
background-color: ${gold};
`;