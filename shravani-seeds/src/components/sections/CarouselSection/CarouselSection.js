"use client";

import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Image,
} from "@chakra-ui/react";

import Slider from "react-slick";
import ShravaniSeedsLogo2 from "../../../assets/shravani_seeds_logo_2.svg";
import CarouselImage1 from "../../../assets/carousel_image_1.jpg";
import CarouselImage2 from "../../../assets/carousel_image_2.jpg";
import CarouselImage3 from "../../../assets/carousel_image_3.jpg";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 50000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CarouselSection() {
  return (
    <div id="carousel">
      <Carousel />
    </div>
  );
}

function Carousel() {
  const [, setSlider] = React.useState(null);
  // const top = useBreakpointValue({ base: "90%", md: "50%" });
  // const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Premium Wheat Seeds",
      text: "Our premium wheat seeds are bred for high yield and disease resistance. Perfect for achieving optimal crop growth.",
      image: CarouselImage1,
      headingTextColor: 'white',
      headingTextShadow: '1px 1px 3px black',
      subHeadingTextColor: 'white',
      subHeadingTextShadow: '1px 1px 3px black'
    },
    {
      title: "High-Quality Soyabean Seeds",
      text: "Our soyabean seeds offer superior germination rates and are ideal for a range of climates and soil types.",
      image: CarouselImage2,
      headingTextColor: 'white',
      headingTextShadow: '1px 1px 3px black',
      subHeadingTextColor: 'white',
      subHeadingTextShadow: '1px 1px 3px black'
    },
    {
      title: "Innovative Seed Technology",
      text: "We use cutting-edge technology to develop seeds that are resilient and adaptable to changing conditions.",
      image: CarouselImage3,
      headingTextColor: 'black',
      headingTextShadow: '1px 1px 3px white',
      subHeadingTextColor: 'white',
      subHeadingTextShadow: '1px 1px 3px black'
    },
  ];

  return (
    <Box position={"relative"} height={"600px"} width={"full"}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"600px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
             <Flex position="relative">
                  <Image
                    height={{base:"60px",sm:"60px",md:"85px",lg:"100px"}}
                    width="auto"
                    position="absolute"
                    userSelect={"none"}
                    top="80px"
                    right="0px"
                    src={ShravaniSeedsLogo2}
                    alt="Shravani Seeds"
                  />
                </Flex>
            <Container size="container.lg" height="90%" position="relative">
              <Stack
                spacing={6}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                paddingRight={'10px'}
              >
                <Heading
                  color={card.headingTextColor}
                  textShadow={card.headingTextShadow}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color={card.subHeadingTextColor} textShadow={card.subHeadingTextShadow}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
