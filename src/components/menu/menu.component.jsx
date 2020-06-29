import React from 'react';
import {MenuCurtain, MenuItem, MenuItemContainer, MenuWrapper, Social} from "./menu.style";

const Menu = () => {


    return (
        <MenuWrapper>
            <MenuCurtain className="curtain"/>
            <MenuCurtain className="curtain">
                <MenuItemContainer>
                    <MenuItem className='hover'>Home</MenuItem>
                    <MenuItem className='hover'>Projects</MenuItem>
                    <MenuItem className='hover'>My CV</MenuItem>
                    <MenuItem className='hover'>Contact me</MenuItem>
                </MenuItemContainer>
            </MenuCurtain>
            <MenuCurtain className="curtain"/>
            <Social>
                <i className="fab fa-facebook-f hover"/>
                <i className="fab fa-twitter hover"/>
                <i className="fab fa-instagram hover"/>
                <i className="fab fa-linkedin hover"/>
                <i className="fab fa-medium-m hover"/>
                <i className="fab fa-github hover"/>
            </Social>
        </MenuWrapper>
    );
};

export default Menu;
