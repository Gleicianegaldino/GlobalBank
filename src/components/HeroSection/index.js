import React, { useState } from 'react';
import Video from '../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, 
         HeroBg, 
         VideoBg,
         HeroContent, 
         HeroH1,
         HeroP, 
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight 
        } from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Banco virtual fácil de usar</HeroH1>
        <HeroP>Crie sua conta hoje e aproveite $1000 de crédito para o próximo pagamento.</HeroP>
        <HeroBtnWrapper>
           <Button to='cadastro' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                Clique aqui para começar {hover ? <ArrowForward /> : <ArrowRight/> }
           </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
