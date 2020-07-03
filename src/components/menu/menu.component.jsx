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
                <a href="https://web.facebook.com/nii.o.abbey" target='_blank' rel='noopener noreferrer'><i
                    className="fab fa-facebook-f hover"/></a>
                <a href="https://twitter.com/nii_odenkey_" target='_blank' rel='noopener noreferrer'><i
                    className="fab fa-twitter hover"/></a>
                <a href="https://www.instagram.com/n_odenkey/" target='_blank' rel='noopener noreferrer'><i
                    className="fab fa-instagram hover"/></a>
                <a href="https://www.linkedin.com/in/samuel-abbey-618957168/" target='_blank' rel='noopener noreferrer'><i
                    className="fab fa-linkedin hover"/></a>
                    {/*<i className="fab fa-medium-m hover"/>*/}
                <a href="https://github.com/Nodenkey" target='_blank'
                   rel='noopener noreferrer'><i className="fab fa-github hover"/></a>
            </Social>
        </MenuWrapper>
);
};

export default Menu;
