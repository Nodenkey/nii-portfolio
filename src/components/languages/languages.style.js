import styled from "styled-components";
import {subText} from "../../utils/colors";

export const LanguageWrapper = styled.section`
  width: 100%;
  height: 400px;
  padding: 100px 5%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (min-width: 600px){
  height: 100vh;
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: ${props => {
    if (props.className === 'html-icon icon'){
        return '10%'
    }else if (props.className === 'css-icon icon'){
        return '30%'
    }else if (props.className === 'javascript-icon icon'){
        return '60%'
    }else if (props.className === 'react-icon icon'){
        return '80%'
    }else if (props.className === 'python-icon icon'){
        return '85%'
    }else if (props.className === 'flask-icon icon'){
        return '83%'
    }else if (props.className === 'photoshop-icon icon'){
        return '20%'
    }else if (props.className === 'figma-icon icon'){
        return '70%'
    }
    else if (props.className === 'firebase-icon icon'){
        return '5%'
    }
}
}; 
  left: ${props => {
    if (props.className === 'html-icon icon'){
        return '20%'
    }else if (props.className === 'javascript-icon icon'){
        return '20%'
    }else if (props.className === 'python-icon icon'){
        return '40%'
    }else if (props.className === 'firebase-icon icon'){
        return '50%'
    }else if (props.className === 'flask-icon icon'){
        return '70%'
    }else if (props.className === 'photoshop-icon icon'){
        return '85%'
    }else if (props.className === 'figma-icon icon'){
        return '90%'
    }else if (props.className === 'css-icon icon'){
        return '5%'
    }
    else if (props.className === 'react-icon icon'){
        return '5%'
    }
}
};
  & svg, & img{
  width: 20px;
  height: 20px;
  opacity: 0.3;
  @media only screen and (min-width: 768px){
  width: 50px;
  height: 50px;
  }
  }
`;
export const LanguageHeader = styled.h2`
  z-index: 2;
  font-size: 2rem;
  margin-bottom: 50px;
  @media only screen and (min-width: 600px){
    font-size: 3rem;
  }
`;
export const ExpertiseWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  & h2:last-child{
  margin-right: 0;
  }
`;
export const Expertise = styled.h2`
margin-right: 20%;
margin-bottom: 30px;
color: ${subText};
`;