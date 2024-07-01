import React from 'react'
import ArrowLeftSvg from '@assets/images/PetId/arrowLeft.svg'
import ArrowRighttSvg from '@assets/images/PetId/arrowRight.svg'
import CarouselImage1 from '@assets/images/PetId/carosal1.svg'
import CarouselImage2 from '@assets/images/PetId/carosal2.svg'
import CarouselImage3 from '@assets/images/PetId/carosal3.svg'
import { BottomSide, CarouselCard, CarouselCardCenter, CarouselCardLeft, CarouselCardRight, CenterSide, HeaderSubText, HeaderText, InsideLeft, InsideRight, UpperSide } from './styled'

const Carousel = () => {
  return (
    <div style={{
      width: '80%',
      margin: '0 auto'
    }}>
      <CarouselCard>
        <CarouselCardLeft>
          <ArrowLeftSvg />
        </CarouselCardLeft>
        <CarouselCardCenter>
          <InsideLeft>
            <UpperSide>
              1
            </UpperSide>
            <CenterSide>
              <HeaderText>
                Apri la sezione Pet ID in Helpet App
              </HeaderText>
              <HeaderSubText>
                  Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.
              </HeaderSubText>
            </CenterSide>
            <BottomSide>
              2
            </BottomSide>
          </InsideLeft>
          <InsideRight>
            <CarouselImage1 />
          </InsideRight>
        </CarouselCardCenter>
        <CarouselCardRight>
          <ArrowRighttSvg />
        </CarouselCardRight>
      </CarouselCard>
    </div>
  )
}

export default Carousel