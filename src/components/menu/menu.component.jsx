import React from 'react';
import {MenuCurtain, MenuItem, MenuItemContainer, MenuWrapper, Social} from "./menu.style";
import { HashLink as Link } from 'react-router-hash-link';


const Menu = ({toggleClose}) => {


    return (
        <MenuWrapper>
            <MenuCurtain className="curtain"/>
            <MenuCurtain className="curtain">
                <MenuItemContainer>
                    <MenuItem className='hover' onClick={toggleClose}><Link to="/#">Home</Link></MenuItem>
                    <MenuItem className='hover' onClick={toggleClose}><a href='#projects'>Projects</a></MenuItem>
                    <MenuItem className='hover' onClick={toggleClose}>My CV</MenuItem>
                    <MenuItem className='hover' onClick={toggleClose}>Contact me</MenuItem>
                </MenuItemContainer>
            </MenuCurtain>
            <MenuCurtain className="curtain"/>
            <Social>
                <a href="https://web.facebook.com/nii.o.abbey" target='_blank' rel='noopener noreferrer' onClick={toggleClose}><i
                    className="fab fa-facebook-f hover"/></a>
                <a href="https://twitter.com/nii_odenkey_" target='_blank' rel='noopener noreferrer' onClick={toggleClose}><i
                    className="fab fa-twitter hover"/></a>
                <a href="https://www.instagram.com/n_odenkey/" target='_blank' rel='noopener noreferrer' onClick={toggleClose}><i
                    className="fab fa-instagram hover"/></a>
                <a href="https://www.linkedin.com/in/samuel-abbey-618957168/" target='_blank' rel='noopener noreferrer' onClick={toggleClose}><i
                    className="fab fa-linkedin hover"/></a>
                    {/*<i className="fab fa-medium-m hover"/>*/}
                <a href="https://github.com/Nodenkey" target='_blank'
                   rel='noopener noreferrer' onClick={toggleClose}><i className="fab fa-github hover"/></a>
            </Social>
        </MenuWrapper>
);
};

export default Menu;
