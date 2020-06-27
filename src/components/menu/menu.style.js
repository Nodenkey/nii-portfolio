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