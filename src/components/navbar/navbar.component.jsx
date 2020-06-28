import React, {useState} from 'react';
import {Hamburger, HamLine, NavBarWrapper, NavBrand} from "./navbar.style";
import {Logo} from "../icons/icons.component";
import Menu from "../menu/menu.component";
import {CSSTransition} from "react-transition-group";
import {gsap, Power3} from "gsap";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const HamFunction = () => {
        setOpen(!open);
    }

    open ? document.querySelector("html").style.overflow = "hidden" :
        document.querySelector("html").style.overflowY = "auto"

    const onEnter = node => {
        const items = node.children[1].children[0].children;
        gsap.from(node.children, {
            duration: .4,
            opacity: 0,
            ease: Power3.easeOut,
            rotateY: 50,
            stagger: .2,
        })
        gsap.to(items, {duration: .7, y: -100, opacity: 1, delay: .4, stagger: .2})
    }
    const onExit = node => {
        const items = node.children[1].children[0].children;
        gsap.to(node.children, {
            duration: .4,
            opacity: 0,
            ease: Power3.easeOut,
            rotateY: -50,
            stagger: .2,
            delay: .7
        })
        gsap.to(items, {duration: .7, y: 200, opacity: 0, stagger: {each: .2, from: "end"}});
    }
    return (
        <>
            <NavBarWrapper>
                <NavBrand className='hover'>
                    <Logo/>
                </NavBrand>
                <Hamburger onClick={HamFunction} className='hover'>
                    <HamLine/>
                    <HamLine/>
                    <HamLine/>
                </Hamburger>
            </NavBarWrapper>
            {
                <CSSTransition
                    timeout={{
                        appear: 0,
                        enter: 0,
                        exit: 1000,
                    }}
                    in={open}
                    appear={true}
                    enter={true}
                    exit={true}
                    unmountOnExit
                    mountOnEnter
                    onEntered={onEnter}
                    onExit={onExit}
                >
                    <Menu show={open}/>
                </CSSTransition>
            }
        </>
    );
};

export default NavBar;
