import React, {useEffect, useRef} from 'react';
import {Hello, ImageContainer, ImageWrapper, LandingWrapper, SubHello, TextWrapper} from "./landing.style";
import Nii from "../../assets/images/nii.jpg";
import {gsap, Power3} from "gsap";

const Landing = () => {
    let image = useRef(null);
    let name = useRef(null);
    useEffect(() => {
        gsap.from(image, {duration: 3, y: 300, opacity: 0, scale: 0.5, ease: Power3.easeInOut})
        gsap.from(name, {duration: 3, opacity: 0,  ease: Power3.easeInOut})
    }, [])
    return (
        <LandingWrapper id='home'>
            <TextWrapper>
                <Hello>Hello,
                    <span ref={el => name = el}> I'm Nii Odenkey</span></Hello>
                <SubHello>I am a self-taught front-end web developer. I am very much into UI/UX design, and love making eye-catching web apps</SubHello>
            </TextWrapper>
            <ImageWrapper>
                <ImageContainer style={{backgroundImage: `url(${Nii})`}} ref={el => image = el}/>
            </ImageWrapper>
        </LandingWrapper>
    );
};

export default Landing;
