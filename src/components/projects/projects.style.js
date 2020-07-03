import styled from "styled-components";
import {LanguageHeader} from "../languages/languages.style";
import {gold} from "../../utils/colors";

export const ProjectsWrapper = styled.section`
width: 100%;
background: black;
padding-top: 100px;
overflow-x: hidden;
`;
export const ProjectContainer = styled.div`
width: 100%;
display: flex;
padding: 100px 5%;
position: relative;
`;
export const ProjectHeader = styled(LanguageHeader)`
display: inline;
`;
export const Line = styled.div`
height: 2px;
width: 250px;
background: white;
margin: 10px auto;
@media only screen and (min-width: 1200px){
width: 400px;
}
`;
export const ProjectLabel = styled.div`
background-color: black;
padding: 10px 20px;
position: absolute;
font-size: .6rem;
top: 0;
right: 0;
color: ${gold};
@media only screen and (min-width: 600px){
font-size: 1rem;
}
`;
export const ProjectLabel2 = styled(ProjectLabel)`
right: auto;
left: 0;
`;
export const ImageContainer = styled.div`
position: relative;
width: 60%;
height: auto;
overflow: hidden;
&:hover img{
transform: scale(1.5);
filter: blur(1px);
}
&:hover .visitor{
display: flex;
}
&::before{
content: '';
background: rgba(0,0,0,0.3);
top: 0;
left: 0;
display: flex;
position: absolute;
z-index: 1;
width: 100%;
height: 100%;
}
`;
export const VisitContainer = styled.div`
position: absolute;
z-index: 2;
transition: 1s ease-in-out;
top: calc(100% - 24px);
left: -5px;
i{
font-size: 1rem;
color: ${gold};
}
@media only screen and (min-width: 1200px){
display: none;
top: calc(100% - 45px);
i{
font-size: 3rem;
}
}
`;
export const VisitContainer2 = styled(VisitContainer)`
left: auto;
right: -5px;
i{
-webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
`;
export const ImageContainer2 = styled(ImageContainer)`
margin-left: 40%;
`;
export const ProjectImage = styled.img`
object-fit: contain;
width: 100%;
transition: 1s ease-out;
`;
export const ProjectName = styled.h2`
font-size: 1.5rem;
position: absolute;
z-index: 2;
left: 50%;
top: 45%;
@media only screen and (min-width: 1200px){
font-size: 4rem;
}
`;
export const ProjectName2 = styled(ProjectName)`
left: auto;
right: 50%;
`;
export const ProjectNumber = styled.h2`
position: absolute;
z-index: 2;
right: 10%;
top: 30%;
color: ${gold};
font-weight: lighter;
opacity: .3;
`;
export const ProjectNumber2 = styled(ProjectNumber)`
left: 10%;
right: 100%;
`;