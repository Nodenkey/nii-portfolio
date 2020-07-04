import React, {useEffect} from 'react';
import {
    Expertise,
    ExpertiseContainer,
    ExpertiseWrapper,
    IconWrapper,
    LanguageHeader,
    LanguageWrapper
} from "./languages.style";
import {
    Css,
    Firebase,
    Flask,
    Html,
    Js,
    Node,
    Photoshop,
    Python,
    ReactIcon,
    Redux,
    Webstorm
} from "../icons/icons.component";
import Figma from "../../assets/svg/figma-1.svg";
import {gsap, Power1} from "gsap";

const Languages = () => {
    useEffect(() => {

        gsap.to('.icon', {
            duration: 2,
            y: -20,
            ease: Power1.easeInOut,
            stagger: {
                repeat: -1, amount: 1, yoyo: true,
            }
        })
    }, [])
    return (
        <LanguageWrapper className='lang-icons'>
            <IconWrapper className='html-icon icon'><Html/></IconWrapper>
            <IconWrapper className='css-icon icon'><Css/></IconWrapper>
            <IconWrapper className='javascript-icon icon'><Js/></IconWrapper>
            <IconWrapper className='react-icon icon'><ReactIcon/></IconWrapper>
            <IconWrapper className='python-icon icon'><Python/></IconWrapper>
            <IconWrapper className='photoshop-icon icon'><Photoshop/></IconWrapper>
            <IconWrapper className='figma-icon icon'><img src={Figma} alt="figma icon"/></IconWrapper>
            <IconWrapper className='firebase-icon icon'><Firebase/></IconWrapper>
            <IconWrapper className='flask-icon icon'><Flask/></IconWrapper>
            <IconWrapper className='node-icon icon'><Node/></IconWrapper>
            <IconWrapper className='webstorm-icon icon'><Webstorm/></IconWrapper>
            <IconWrapper className='redux-icon icon'><Redux/></IconWrapper>
            <LanguageHeader>Which languages and tools do I use?</LanguageHeader>
            <ExpertiseContainer>
                <ExpertiseWrapper>
                    <Expertise>React js</Expertise>
                    <Expertise>Html</Expertise>
                    <Expertise>Css</Expertise>
                    <Expertise>Redux</Expertise>
                </ExpertiseWrapper>
                <ExpertiseWrapper>
                    <Expertise>Vanilla js</Expertise>
                    <Expertise>Python</Expertise>
                    <Expertise>Flask</Expertise>
                    <Expertise>Express</Expertise>
                </ExpertiseWrapper>
                <ExpertiseWrapper>
                    <Expertise>Firebase</Expertise>
                    <Expertise>Photoshop</Expertise>
                    <Expertise>Figma</Expertise>
                    <Expertise>Webstorm</Expertise>
                </ExpertiseWrapper>
            </ExpertiseContainer>
        </LanguageWrapper>
    );
};

export default Languages;
