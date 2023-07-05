"use client";

import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import { Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { primaryColor, secondaryColor, size16, size20, size24, size32, size50, xMarginLarge } from '@/app/theme';
import ToLearn from './ToLearn';
import Tools from './Tools';
import Sponsorship from './Sponsorship';
import NewsLetter from './NewsLetter';
import MyButton from './MyButton';
import image from '@/assets/homepage-banner-image.png'

const Homepage = () => {
  return (
    <>
        <Nav />
        
        {/* Banner */}
        <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr"}} padding={{lg:`100px ${xMarginLarge}`, base: "100px 5%"}} background={primaryColor} gap="10px">
            <Flex flexDir={"column"} gap={'20px'} color={"white"}>
                <Text fontSize={{base:size32, lg:size50}} fontWeight={"600"}>Learn futuristic in-demand technology skills collaborating with AI and Robotics</Text>
                <Text fontSize={{lg:size24, base: size16}}>Unlock a Sustainable Future: Empower Yourself with Cutting-Edge Tech Skills on Creos</Text>
                <MyButton padding={{base:'12px 36px',lg:'24px 52px 24px 52px'}} text={"Learn More"} fontSize={{lg:size20, base: size16}} bg={secondaryColor} color={"black"}/>
            </Flex>

            <Flex>
                <Image src={image.src} alt="Banner image"/>
            </Flex>
        </Grid>
        
        <ToLearn />
        <Tools />
        <Sponsorship />
        <NewsLetter />

        <Footer/>
    </>
  )
}

export default Homepage