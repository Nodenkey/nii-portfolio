import styled from "styled-components";
import {LanguageHeader} from "../languages/languages.style";
import {gold, subText} from "../../utils/colors";

export const AboutWrapper = styled.section`
width: 100%;
background-color: black;
padding: 100px 5%;
`;
export const AboutHeader = styled(LanguageHeader)`
`;
export const Quote = styled.blockquote`
font-size: 1.3rem;
color: ${gold};
text-align: center;
`;
export const QuoteName = styled.p`
text-align: center;
margin-top: 20px;
color: ${gold};
font-size: 0.9rem;
position: relative;
display: inline-block;
&::before{
content: '';
height: 1px;
background-color: ${gold};
width: 30px;
right: 100%;
top: 50%;
margin-right: 10px;
position: absolute;
}
`;
export const MyselfWrapper = styled.div`
max-width: 800px;
margin: 30px auto;
`;
export const Myself = styled.h2`
color: ${subText};
font-weight: lighter;
text-align: left;
`;