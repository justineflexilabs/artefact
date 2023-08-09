import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Slider from 'react-slick';

import { Image1, Image2, Image3, Logo } from '@public/images/auth';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function AuthImageCarousel() {
  const cards = [
    {
      title: 'Turn your spaces into places.',
      detailsRow1: 'Maximise the impact of your public art ',
      detailsRow2: 'and help create better cities for all.',
      credits: 'Photo Credit: James Logan',
      image: Image1,
    },
    {
      title: `It's not just about maintenance`,
      detailsRow1: `With Artefact, you comprehend the true `,
      detailsRow2: `value of your city's creative treasury`,
      credits: 'Photo Credit:  Simon Passion',
      image: Image2,
    },
    {
      title: 'With Artefact',
      detailsRow1: `You gain unprecedented insight into`,
      detailsRow2: 'the condition of each artwork.',
      credits: 'Photo Credit:  Mark Falzon',
      image: Image3,
    },
  ];

  return (
    <>
      <Image
        src={Logo}
        alt="Logo"
        style={{
          zIndex: 99,
          position: 'absolute',
          top: 20,
          left: 50,
          width: '50%',
          maxWidth: '250px',
        }}
      />
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'100vh'}
            backgroundRepeat="no-repeat"
            backgroundPosition={'center'}
            backgroundSize="cover"
            backgroundImage={`url(${card.image.src})`}
          >
            <Box
              position="absolute"
              left={0}
              right={0}
              bottom={0}
              height="30%"
              backgroundImage="linear-gradient(transparent, rgba(0, 0, 0, 0.8))"
              pointerEvents="none"
              zIndex={1}
            />
            <Flex
              direction={'column'}
              position="absolute"
              left="20"
              bottom="5"
              width={'full'}
              zIndex={2}
              fontFamily={'Gilroy-Light'}
            >
              <Box mb={20}>
                <Text
                  fontSize={{ base: '2xl', lg: '4xl' }}
                  color="white"
                  textAlign="left"
                >
                  {card.title}
                </Text>
                <Text
                  fontSize={{ base: 'md', lg: 'lg' }}
                  color="white"
                  textAlign="left"
                >
                  {card.detailsRow1} <br /> {card.detailsRow2}
                </Text>
              </Box>
              <Text
                fontSize={{ base: 'md', lg: 'sm' }}
                color="white"
                textAlign="left"
              >
                {card.credits}
              </Text>
            </Flex>
          </Box>
        ))}
      </Slider>
    </>
  );
}
