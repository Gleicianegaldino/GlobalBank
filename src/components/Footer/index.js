import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
         FooterLink, SocialMedia, SocialMediaWrap, SocialIcons, SocialLogo, WebsiteRights, SocialIconsLink } from './FooterElements';   

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>
              <FooterLink to="/signin">Como funcioa</FooterLink>
              <FooterLink to="/signin">Depoimentos</FooterLink>
              <FooterLink to="/signin">Carreiras</FooterLink>
              <FooterLink to="/signin">Investidores</FooterLink>
              <FooterLink to="/signin">Termos de serviço</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Vídeo</FooterLinkTitle>
              <FooterLink to="/signin">Enviar vídeo</FooterLink>
              <FooterLink to="/signin">Embaixadores</FooterLink>
              <FooterLink to="/signin">Agência</FooterLink>
              <FooterLink to="/signin">Influenciado</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Fale conosco</FooterLinkTitle>
              <FooterLink to="/signin">Contato</FooterLink>
              <FooterLink to="/signin">Suporte</FooterLink>
              <FooterLink to="/signin">Destinos</FooterLink>
              <FooterLink to="/signin">Patrocínicos</FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">GlobalBank</SocialLogo>
            <WebsiteRights>GlobalBank © {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
