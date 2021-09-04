import React from 'react';
import { ReactComponent as LogoIcon} from './logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuList from './menu-items';

const Wrapper = styled.div`
    position: fixed;
    width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    top: 12px;
`;
const Logo = styled(NavLink)`
    width: 46px;
    height: 42px;
`;
const NavLinksContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;
    
`;
const TabContainer = styled.li`
    position: relative;
    margin-right: 26px;
    color: white ;
    &:hover {
        border-bottom: 2px solid #F94040;  
    };
    &:nth-child(4) {
        width: 103px;
        height: 35px;
        text-align: center;
        margin: 0 auto;
        border: 1px solid #FB5B57;
        color: #FB5B57; 
        overflow: hidden; 
    }
    &:nth-child(4) a{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #FB5B57;
    
        font-size: 24px;
        line-height: 28px;
        text-decoration: none;
        &.active{
            border-bottom: 2px solid #F94040; 
    }
`;

const TabLink = styled(NavLink)`
    font-size: 24px;
    line-height: 28px;
    text-decoration: none;
    color: white ;  
    &.active{
        border-bottom: 2px solid #F94040;
    };
`;




const Header = () => {
    const MenuItem = MenuList.map(({title, url}, index) => (
        <TabContainer key={index}> 
            <TabLink exact to={url}>
                {title}
            </TabLink>
        </TabContainer>
    ))
    return (
        <Wrapper>
            <Logo exact to="/">
                <LogoIcon />
            </Logo>
            <NavLinksContainer>
                {MenuItem}
            </NavLinksContainer>
        </Wrapper>
    )
}

export default Header;