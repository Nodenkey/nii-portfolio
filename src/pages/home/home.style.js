import styled from "styled-components";
import {gold} from "../../utils/colors";


export const HomeWrapper = styled.div`
`;
export const Cursor = styled.div`
  display: none;
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid ${gold};
  border-radius: 50%;
  pointer-events: none;
  transform: scale(3);
  z-index: 9999999999999999999999999999;
  @media only screen and (min-width: 1200px){
  display: inline-block;
  }
`;