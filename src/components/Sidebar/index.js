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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='sobre' >Sobre</SidebarLink>
          <SidebarLink to='saiba' >Explore</SidebarLink>
          <SidebarLink to='servicos' >Serviços</SidebarLink>
          <SidebarLink to='cadastro'>Cadastre-se</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/entrar'>Entrar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
