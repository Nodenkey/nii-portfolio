import styled from "styled-components";
import {gold} from "../../utils/colors";

export const SiteButton = styled.div`
padding: 10px 15px;
margin-top: 10px;
border: 1px solid white;
color: white;
display: inline-block;
&:hover{
color: ${gold};
border: 1px solid ${gold};
}
@media only screen and (min-width: 1200px){
display: none;
}
`;