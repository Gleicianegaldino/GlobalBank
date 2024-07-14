import React, { useState } from 'react';
import Video from '../videos/video.mp4';
import { Button } from 'react-scroll';
import { IoArrowForward } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
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
        <HeroH1> Banco Virtual fácil de usar</HeroH1>
        <HeroP>djkdk jkjddjkd jfsdj</HeroP>
        <HeroBtnWrapper>
           <Button to='cadastro' onMouseEnter={onHover} onMouseLeave={onHover}>
                Clique aqui para começar {hover ? <ArrowForward /> : <ArrowRight/> }
           </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
