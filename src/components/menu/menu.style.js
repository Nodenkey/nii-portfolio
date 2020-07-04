import styled from "styled-components";
import {gold} from "../../utils/colors";

export const MenuWrapper = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const MenuCurtain = styled.div`
  width: calc(100%/3);
  height: 100%;
  background: black;
`;
export const MenuItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MenuItem = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
    opacity: 0;
     word-break: break-word;
    transform: translateY(100px);
    transition: color, letter-spacing 200ms ease-in;
    &:hover{
    letter-spacing: 0.5rem;
    cursor: default;
    }
    a:hover{
        color: ${gold};
    }
@media only screen and (min-width: 600px) {
        font-size: 3rem;
}
`;
export const Social = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  bottom: 50px;
  display: flex;
  justify-content: center;
  i{
    font-size: 1rem;
    color: white;
    transition: all 200ms ease-in;
    margin: 0 20px;
    @media only screen and (min-width: 600px){
    font-size: 2rem;
    }
  }
  i:hover{
  color: ${gold};
  transform: scale(1.3);
  }
`;