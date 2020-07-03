import styled from "styled-components";

export const ResumeWrapper = styled.section`
width: 100%;
background-color: black;
padding: 100px 0;
perspective: 5000px;
perspective-origin: 50% calc(100% - 580px);
`;
export const ResumePiece = styled.div`
  width: 80%;
  margin: -8px 10%;
  transform-origin: top;
`;
export const ResumeImage =styled.img`
  width: 100%;
  object-fit: contain;
`;