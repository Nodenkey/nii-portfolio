import styled from "styled-components";
import {gold} from "../../utils/colors";

export const ResumeWrapper = styled.section`
width: 100%;
background-color: black;
padding: 100px 5% 0 5%;
position: relative;
overflow: hidden;
`;
export const Image = styled.img`
width: 50%;
`;
export const Downloader = styled.div`
display: inline-block;
border: 1px solid white;
padding: 10px 20px;
position: absolute;
font-size: .7rem;
top: 45%;
right: 10%;
&:hover{
border: 1px solid ${gold};
color: ${gold};
}
@media only screen and (min-width: 600px){
right: 13%;
font-size: 2rem;
}
`;