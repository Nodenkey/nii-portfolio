import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: absolute;
  z-index: 99999;
  width: 100%;
  margin-top: 90px;
  height: calc(100vh - 90px);
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
    transform: translateY(100px);
@media only screen and (min-width: 600px) {
        font-size: 3rem;
}
`;