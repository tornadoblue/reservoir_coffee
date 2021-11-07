import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink} from './sidebarElements';

function Sidebar({toggle, isOpen}) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to={"/menu"} onClick={toggle}>
                        Menu
                    </SideBarLink>
                    <SideBarLink to={"/gallery"} onClick={toggle}>
                        Gallery
                    </SideBarLink>
                    <SideBarLink to={"/about"} onClick={toggle}>
                        About Us
                    </SideBarLink>
                    <SideBarLink to={"/location"} onClick={toggle}>
                        Location
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
}

export default Sidebar;