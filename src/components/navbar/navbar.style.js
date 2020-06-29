import styled from "styled-components";
import {gold} from "../../utils/colors";

export const NavBarWrapper = styled.div`
  padding: 10px 5%;
  width: 100vw;
  position: fixed;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavBrand = styled.img`
  width: 50px;
`;
export const Hamburger = styled.div`
  transition: 300ms ease-in-out;
  transform: ${props => props.open ? "rotate(90deg)" : "rotate(0)"};
  & >:last-child{
  margin-bottom: 0;
  }
`;
export const HamLine = styled.div`
  height: 2px;
  width: 35px;
  margin-bottom: 10px;
  background-color: ${gold};
`;