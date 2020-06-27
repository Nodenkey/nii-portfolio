import React, {useEffect, useRef} from 'react';
import {Hello, ImageContainer, LandingWrapper, SubHello} from "./landing.style";
import Nii from "../../assets/images/nii.jpg";
import {gsap, Power3} from "gsap";

const Landing = () => {
    let image = useRef(null);
    useEffect(() => {
        gsap.from(image, {duration: 3, y: 300, opacity: 0, ease: Power3.easeInOut})
    })
    return (
        <LandingWrapper>
            <Hello>Hello, I'm Nii Odenkey</Hello>
            <SubHello>I am a self-taught front-end web developer. <br/> I am very much into UI/UX design, and I loooove
                coding.</SubHello>
            <ImageContainer style={{backgroundImage: `url(${Nii})`}} ref={el => image = el}/>
        </LandingWrapper>
    );
};

export default Landing;
