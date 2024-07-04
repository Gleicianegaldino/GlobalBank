import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
         NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
  return (
   <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> GlobalBank </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='sobre'>Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='saibaMais'>Explore</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='servicos'>Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='cadastro'>Cadastre-se</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink>Entrar</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>  
   </>
  )
}

export default Navbar;
