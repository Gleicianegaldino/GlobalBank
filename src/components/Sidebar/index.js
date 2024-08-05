import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='sobre' onClick={toggle}>Sobre</SidebarLink>
          <SidebarLink to='saiba' onClick={toggle}>Explore</SidebarLink>
          <SidebarLink to='servicos' onClick={toggle}>Serviços</SidebarLink>
          <SidebarLink to='cadastro' onClick={toggle}>Cadastre-se</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/entrar' >Entrar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
