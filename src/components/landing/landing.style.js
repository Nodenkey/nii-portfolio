import styled from "styled-components";
import {subText} from "../../utils/colors";

export const LandingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  @media only screen and (min-width: 1200px){
  flex-direction: row;
  }
`;
export const TextWrapper = styled.div`
  z-index: 2;
  margin-top: 120px;
  @media only screen and (min-width: 1200px){
  margin-top: 0;
  max-width: 1000px;
  }
`;
export const Hello = styled.h1`
margin-bottom: 40px;
line-height: 100%;
`;
export const SubHello = styled.h2`
  color: ${subText};
  @media only screen and (max-width: 600px){
  font-size: 1rem;
  }
`;
export const ImageWrapper = styled.div`
position: relative;
width: 80%;
height: 300px;
align-items: center;
z-index: 1;
justify-content: center;
@media only screen and (min-width: 1200px){
width: 100%;
height: 100%;
}
`;
export const ImageContainer = styled.div`
  background-size: cover;
  background-position: center;
  width: 80%;
  margin: 0 10%;
  height: 300px;
  &:before{
  content: '';
  display: inline-block;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: linear-gradient(none 0%, black 60%);
  }
  @media only screen and (min-width: 600px){
  position: absolute;
  width: 500px;
  height: 500px;
  top: 150px;
  }
`;