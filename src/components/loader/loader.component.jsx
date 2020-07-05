import React, {useEffect, useRef} from 'react';
import {LoaderWrapper, Slide, Vertical} from "./loader.style";
import {gsap} from "gsap/all";

const Loader = () => {
    let leftBar = useRef(null);
    let middleBar = useRef(null);
    let rightBar = useRef(null);
    useEffect(() => {
        gsap.timeline({repeat : -1, repeatDelay: .4}).to(leftBar, {scaleY : 1, transformOrigin : 'bottom', duration : .4,
            ease : 'power3.out', opacity : 1,})
            .to(middleBar, {scaleY : 1, transformOrigin : 'top', duration : .4, ease : 'power3.out',
                rotateZ : -25, marginLeft : -40, y: 10, opacity : 1})
            .to(rightBar, {scaleY : 1, transformOrigin : 'bottom', duration : .4,
                ease : 'power3.out', marginLeft : 35, opacity : 1,})
    })
    return (
        <LoaderWrapper>
            <Vertical ref={el => leftBar = el}/>
            <Slide ref={el => middleBar = el}/>
            <Vertical ref={el => rightBar = el}/>
        </LoaderWrapper>
    );
};

export default Loader;
