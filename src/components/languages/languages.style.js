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
        return '15%'
    }else if (props.className === 'figma-icon icon'){
        return '70%'
    }
    else if (props.className === 'firebase-icon icon'){
        return '5%'
    }else if (props.className === 'redux-icon icon'){
        return '35%'
    }else if (props.className === 'node-icon icon'){
        return '60%'
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
        return '80%'
    }else if (props.className === 'figma-icon icon'){
        return '90%'
    }else if (props.className === 'css-icon icon'){
        return '5%'
    }
    else if (props.className === 'react-icon icon'){
        return '5%'
    }else if (props.className === 'redux-icon icon'){
        return '45%'
    }else if (props.className === 'node-icon icon'){
        return '70%'
    }else if (props.className === 'webstorm-icon icon'){
        return '85%'
    }
}
};
  & svg, & img{
  width: 20px;
  height: 20px;
  opacity: 0.25;
  @media only screen and (min-width: 768px){
  width: 50px;
  height: 50px;
  }
  }
`;
export const LanguageHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 50px;
  @media only screen and (min-width: 600px){
    font-size: 3rem;
  }
`;
export const ExpertiseContainer = styled.div`
width: 80%;
margin-left: 10%;
div:last-child{
margin-right: 0;
}
`;
export const ExpertiseWrapper = styled.div`
  width: 30%;
  margin-right: 5%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Expertise = styled.h2`
margin-bottom: 30px;
color: ${subText};
`;