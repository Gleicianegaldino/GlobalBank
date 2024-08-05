import React from 'react'
import Icon1 from '../images/ft-01.svg'
import Icon2 from '../images/ft-02.svg'
import Icon3 from '../images/ft-03.svg'
import { ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,
         ServicesP } from '../Service/ServicesElements'

const Services = () => {
  return (
   <ServicesContainer id="servicos">
        <ServicesH1>Serviços</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduza suas despesas</ServicesH2>
                <ServicesP>Transforme suas taxas bancárias e aumente sua receita.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Suporte virtual</ServicesH2>
                <ServicesP>Sua plataforma está disponível online em qualquer canto do planeta.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Vantagens exclusivas</ServicesH2>
                <ServicesP>Desfrute de 5% de cashback desbloqueando nosso cartão de membro especial.</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
   </ServicesContainer>
  )
}

export default Services