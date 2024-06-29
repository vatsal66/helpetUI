import React from 'react';
import Mains from '../assets/images/mainimage.png';
import Tree from '../assets/images/mmeet.png';
import slider1 from '../assets/images/slider1.png';
import road from '../assets/images/mroad.png';

import {
  Container,
  ContainerSecond,
  MainQuition,
  Maintitle,
  Subtitle,
  TitleContainer,
  TitleSecondContainer,
  Vantaggi,
} from '../styles/LibrettoSanitarioStyle';
import Slider from 'react-slick';
// import { useIntl } from 'react-intl';

const images = [
  { id: 1, url: slider1, alt: 'Image 1' },
  // { id: 2, url: slider1, alt: 'Image 2' },
  // { id: 3, url: slider1, alt: 'Image 3' },
];
const index2 = () => {
  // const { messages } = useIntl();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Container>
        <TitleContainer>
          <Maintitle>Libretto sanitario</Maintitle>
          <Maintitle>Ricetta elettronica, vaccini
            visita medica</Maintitle>
        </TitleContainer>
        <img src={Mains} width={1880} />
      </Container>
      <ContainerSecond>
        <TitleSecondContainer>
          <MainQuition>Cosa include il Libretto Sanitario</MainQuition> <img style={{ marginTop: '10px', margin: 'auto' }} src={Tree} width={30} height={25} />
        </TitleSecondContainer>

        <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
          a purus </Subtitle>

        {images.map(image => (
          <div key={image.id}>
            <img src={image.url} alt={image.alt} width={1600} />
          </div>
        ))}

        <TitleSecondContainer>
          <MainQuition>Vantaggi</MainQuition> <img style={{ marginTop: '10px', margin: 'auto' }} src={Tree} width={30} height={25} />
        </TitleSecondContainer>

        <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
          a purus </Subtitle>

        {/* <Vantaggi><img src={road} /></Vantaggi> */}
      </ContainerSecond>
    </>
  )
}

export default index2
