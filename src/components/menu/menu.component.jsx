import React from 'react';
import {MenuCurtain, MenuItem, MenuItemContainer, MenuWrapper} from "./menu.style";

const Menu = () => {


    return (
        <MenuWrapper>
            <MenuCurtain className="curtain"/>
            <MenuCurtain className="curtain">
                <MenuItemContainer>
                    <MenuItem className='hover'>Project</MenuItem>
                    <MenuItem className='hover'>Project</MenuItem>
                    <MenuItem className='hover'>Project</MenuItem>
                    <MenuItem className='hover'>Project</MenuItem>
                </MenuItemContainer>
            </MenuCurtain>
            <MenuCurtain className="curtain"/>
        </MenuWrapper>
    );
};

export default Menu;
