import styled from "styled-components";
import {gold} from "../../utils/colors";

export const NavBarWrapper = styled.div`
  padding: 10px 5%;
  width: 100vw;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavBrand = styled.div`
  svg{
  height: 70px;
  }
`;
export const Hamburger = styled.div`
  cursor: pointer;
  & >:last-child{
  margin-bottom: 0;
  }
`;
export const HamLine = styled.div`
  height: 2px;
  width: 35px;
  margin-bottom: 7px;
  background-color: ${gold};
`;