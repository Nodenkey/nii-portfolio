import styled from "styled-components";
import {subText} from "../../utils/colors";

export const ErrorWrapper = styled.div`
width: 100vw;
padding: 100px 5%;
text-align: left;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (min-width: 600px){
flex-direction: row;
height: 100vh;
}
`;
export const ErrorText = styled.div`
width: 100%;
margin-bottom: 50px;
@media only screen and (min-width: 600px){
width: 50%;
}
`;
export const ErrorHeader = styled.h2`
font-size: 3rem;
margin-bottom: 20px;
`;
export const ErrorSubText = styled.h2`
font-size: 1.5rem;
font-weight: lighter;
color: ${subText};
margin-bottom: 50px;
`;
export const ErrorImageContainer = styled.div`
width: 100%;
@media only screen and (min-width: 600px){
width: 50%;
}
`;
