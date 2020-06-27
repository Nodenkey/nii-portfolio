import React, {useState} from 'react';
import {Hamburger, HamLine, NavBarWrapper, NavBrand} from "./navbar.style";
import {Logo} from "../icons/icons.component";
import Menu from "../menu/menu.component";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const HamFunction = () => {
        setOpen(!open);
    }
    return (
        <>
        <NavBarWrapper>
            <NavBrand>
                <Logo/>
            </NavBrand>
            <Hamburger onClick={HamFunction}>
                <HamLine/>
                <HamLine/>
                <HamLine/>
            </Hamburger>
        </NavBarWrapper>
    {
       open ? <Menu show={open}/> : null
    }
    </>
    );
};

export default NavBar;
