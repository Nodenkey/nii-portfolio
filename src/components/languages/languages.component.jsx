import React, {useEffect} from 'react';
import {Expertise, ExpertiseWrapper, IconWrapper, LanguageHeader, LanguageWrapper} from "./languages.style";
import {Css, Firebase, Flask, Html, Js, Photoshop, Python, ReactIcon} from "../icons/icons.component";
import Figma from "../../assets/svg/figma-1.svg";
import {gsap, Power1} from "gsap";

const Languages = () => {
    useEffect(() => {

        gsap.to('.icon', {duration: 2,
            y: -20,
            ease: Power1.easeInOut,
            stagger: {
            repeat: -1,  amount: 1, yoyo: true,
            }})
    })
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
            <LanguageHeader>So which language do I speak?</LanguageHeader>
            <ExpertiseWrapper>
                <Expertise>React js</Expertise>
                <Expertise>Html</Expertise>
                <Expertise>Css</Expertise>
            </ExpertiseWrapper>
            <ExpertiseWrapper>
                <Expertise>Vanilla js</Expertise>
                <Expertise>Python</Expertise>
                <Expertise>Flask</Expertise>
            </ExpertiseWrapper>
            <ExpertiseWrapper>
                <Expertise>All things UI/UX</Expertise>
            </ExpertiseWrapper>
        </LanguageWrapper>
    );
};

export default Languages;
