import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { ContactIcon, ResurcesIcon, ServiceIcon, HomeIcon, ProductsIcon } from "../assets/icons/icons";

let logo = require('../assets/logo/Logo_final_white.svg')

const logoWidth = 736 / 2
const logoHeight = 140 / 2

const Container = styled.div`
  background: #212c43;
  margin-bottom: 1.45rem;
  font-family: Roboto Condensed, Helvetica, Arial, sans-serif;
  font-weight: 300;
`

const MiddleContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 16px;
`

const SubHeader = styled.h1`
  margin: 0;
  color: #fefefe;
  font-size: 19px;
  font-weight: 300;
`

const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: auto;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  background-color: #3367d6;
`
const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  max-width: 864px;
  margin: 0 auto;
`;
const StyledNavItem = styled.li`
  margin-bottom: 0;  
}`;

const StyledLink = styled(Link)`
  transition: background-color 0.2s ease-out;
  display: block;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  height: 50px;
  padding: 17px 17px 17px 17px;
  line-height: 26px;
  text-shadow: none;
  font-size: 19px;
  height: 60px;
  
  span {
    position: relative;
    top: -10px;
    left: 5px;
    
    @media (max-width: 680px) {
      display: none;
    }    
  }
  
  &:active {
    background-color: hsla(0,0%,100%,.4);
  }
  
  &:hover {
    background-color: hsla(0,0%,100%,.2);
  }
`

const NavItem = ({ to, name, icon }: { to: string; name: string; icon: any }) => (
  <StyledNavItem>
    <StyledLink to={to}>{icon}<span>{name}</span></StyledLink>
  </StyledNavItem>
)

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <Container>
    <MiddleContainer>
      <Link to="/">
        <img
          src={logo}
          alt="Final Financial Algorithms logo"
          width={logoWidth}
          height={logoHeight}
          style={{marginBottom: 0}}
        />
      </Link>
      <SubHeader>
        Software Tools and Services for <b>Traders</b>
      </SubHeader>
    </MiddleContainer>
    <Nav>
      <NavUl>

        <NavItem to="/" name="Home" icon={<HomeIcon />}/>
        <NavItem to="/services.html" name="Services" icon={<ServiceIcon />}/>
        <NavItem to="/products.html" name="Products" icon={<ProductsIcon />}/>
        <NavItem to="/resources.html" name="Resources" icon={<ResurcesIcon />}/>
        <NavItem to="/contact.html" name="Contact" icon={<ContactIcon />}/>
      </NavUl>
    </Nav>
  </Container>
)

export default Header
