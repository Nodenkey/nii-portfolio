import React, {useEffect, useRef} from 'react';
import {MenuCurtain, MenuWrapper} from "./menu.style";
import {gsap, Power3} from "gsap";
import {CSSTransition, Transition} from "react-transition-group";

const Menu = ({show}) => {
        let curtain = useRef(null);
        // const begin = () => {
        //     gsap.from([curtain.current], {
        //         duration: .4,
        //         opacity: 0,
        //         ease: Power3.easeOut,
        //         rotateY: 50,
        //         stagger: .2,
        //     })
        // }
    const onEnter = node => {
        console.log(node);
        console.log('ok');
    }
    const onExit = node => {
        console.log(node);
    }
     return (
        <Transition
            timeout={1000}
            in={show}
            unmountOnExit
            classNames="curtain"
            onExit={() => {console.log('the thing')}}
            onEnter={onEnter}
        >
            <MenuWrapper className="curtain">
                <MenuCurtain ref={el => curtain = el}/>
                <MenuCurtain className="curtain"/>
                <MenuCurtain className="curtain"/>
            </MenuWrapper>
        </Transition>
    );
};

export default Menu;
