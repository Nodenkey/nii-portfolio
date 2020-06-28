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
`;
export const Hello = styled.h1`
    z-index: 1;
    width: 90%;
`;
export const SubHello = styled.h2`
  color: ${subText};
  z-index: 1;
  max-width: 580px;
  @media only screen and (max-width: 600px){
  font-size: 1rem;
  }
`;
export const ImageContainer = styled.div`
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 80%;
  height: 300px;
  top: calc(50% - 150px);
  left: 10%;
  &:before{
  content: '';
  display: inline-block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(transparent 0%, black 60%);
  }
  @media only screen and (min-width: 600px){
  width: 500px;
  height: 500px;
  top: calc(50% - 250px);
  left: calc(50% - 250px);
  }
`;