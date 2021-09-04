import React, {useState} from 'react';
import { ReactComponent as LogoIcon} from './logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuList from './menu-items';

import './header.styles.css';

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
    @media screen and (max-width: 1100px){
        width: 100vw;
    }
`;
const Logo = styled(NavLink)`
    height: 42px;
    margin-left: 0;
    @media screen and (max-width: 1100px){
        padding-left: 20px;
    }
`;
const NavLinksContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 0;
    list-style-type: none; 
    @media screen and (max-width: 1100px){
        padding-right: 20px;
    }   
    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: rgba(6, 39, 61, 0.95);
        padding: 20px;
        right: ${props => props.marginRight? "0" : "-110%"};
        top: 33px;
        transition: all 0.5s ease-in-out;
    }

`;
const TabContainer = styled.li`
    position: relative;
    margin-left: 20px;
    color: white ;
    @media screen and (max-width: 800px){
        margin: 30px;
     }
    &:hover {
        border-bottom: 2px solid #F94040;  
    };
    &:nth-child(4) {
        width: 103px;
        height: 35px;
        margin-right: 0;
        text-align: center;
        border: 1px solid #FB5B57;
        color: #FB5B57; 
        overflow: hidden; 
    };
    &:nth-child(4) a{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #FB5B57;
        margin-right: 0;
    
        font-size: 24px;
        line-height: 28px;
        text-decoration: none;
        &.active{
            border-bottom: 2px solid #F94040; 
    };
    
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
const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 800px) {
        display: block;
        margin: -15px 50px 0 0;
        padding: 0;
    }    
`;
const Icon = styled.i`
    margin-top: 0;
    padding-top: 0;
    cursor: pointer;
    color: #fff;
    font-size: 34px;
`;




const Header = () => {
    const [clicked, setClicked] = useState(false);
    
    function handleClick() {
        setClicked(!clicked);
    }
    const MenuItem = MenuList.map(({title, url}, index) => (
        <TabContainer key={index}> 
            <TabLink exact to={url} onClick={handleClick}>
                {title}
            </TabLink>
        </TabContainer>
    ))
    
    return (

        <Wrapper>
            <Logo exact to="/">
                <LogoIcon />
            </Logo>
            <NavLinksContainer marginRight={clicked}>
                {MenuItem}
            </NavLinksContainer>
            <MenuIcon onClick={handleClick}>
                <Icon className={clicked ? "fas fa-times" : "fas fa-bars"}></Icon>
            </MenuIcon>
        </Wrapper>
    )
}

export default Header;