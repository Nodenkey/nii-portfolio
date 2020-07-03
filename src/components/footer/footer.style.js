import styled from "styled-components";
import {gold, subText} from "../../utils/colors";

export const FooterWrapper = styled.section`
height: 100vh;
width: 100%;
padding: 80px 5%;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
`;
export const FooterText = styled.div``;
export const FooterMainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (min-width: 1200px){
flex-direction: row;
}
`;
export const FooterHeader = styled.h1`
text-align: left;
  font-size: 2rem;
  margin-bottom: 50px;
  @media only screen and (min-width: 1200px){
    font-size: 3rem;
  }
  @media only screen and (max-width: 320px){
 margin-bottom: 20px;
 }
`;
export const FooterSub = styled.h2`
color: ${subText};
text-align: left;
max-width: 500px;
margin-bottom: 50px;
 @media only screen and (max-width: 320px){
 margin-bottom: 20px;
 }
`;
export const FooterSocial = styled.div`
 > div{
 width: 80%;
 margin: 0 5%;
 @media only screen and (max-width: 320px){
 bottom: 20px;
 }
 }
`;
export const FooterRight = styled.div`
`;
export const MailText = styled.h2`
font-weight: lighter;
color: ${subText};
margin-bottom: 20px;
@media only screen and (min-width: 1200px){
text-align: right;
}
`;
export const Copyright = styled.h2`
`;
export const MailBox = styled.div`
padding: 12px 24px;
border: 1px solid white;
max-width: 300px;
margin: 0 auto 40px ;
@media only screen and (min-width: 1200px){
margin-left: auto;
}
&:hover{
border: 1px solid ${gold};
color: ${gold};
}
`;
export const FooterForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (min-width: 1200px){
align-items: flex-end;
}
& label{
color: ${subText};
font-size: 1.5rem;
display: flex;
justify-content: center;
@media only screen and (min-width: 1200px){
font-size: 2rem;
}
&:last-of-type, &:nth-child(2){
margin-top: 50px;
 @media only screen and (max-width: 320px){
 margin-top: 20px;
 }
}
}
input, textarea{
height: 50px;
margin-left: 20px;
width: 80%;
border-radius: 0;
border: none;
font-family: 'Vollkorn', serif;
font-size: 1.1rem;
@media only screen and (min-width: 1200px){
width: 350px;
}
}
input:focus, textarea:focus{
outline: 2px solid ${gold};
}
textarea{
height: 80px;
}
button{
padding: 12px 24px;
font-size: 1.2rem;
border: 1px solid white;
color: white;
background: none;
width: 50%;
margin: 50px 25%;
 @media only screen and (max-width: 320px){
 margin: 20px 25%;
 }
&:hover{
border: 1px solid ${gold};
color: ${gold};
}
&:focus{
outline: 2px solid ${gold};
}
@media only screen and (min-width: 1200px){
margin: 50px 0 50px 50%;
}
}

`;
