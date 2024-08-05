import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
         NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ isOpen, toggle }) => {
  return (
   <>
        <Nav>
            <NavbarContainer isOpen={isOpen} onClick={toggle}>
                <NavLogo to='/'> GlobalBank </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='sobre'>Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='saiba'>Explore</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='servicos'>Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='cadastro'>Cadastre-se</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Entrar</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>  
   </>
  )
}

export default Navbar;
