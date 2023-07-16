"use client";

import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import { Box, Button, Flex, Grid, Image, Text,Link } from '@chakra-ui/react';
import { dBtnPadding, primaryColor, secondaryColor, size16, size20, size24, size32, size40, size50, xMarginLarge } from '@/app/theme';
import ToLearn from './ToLearn';
import Tools from './Tools';
import Sponsorship from './Sponsorship';
import NewsLetter from './NewsLetter';
import MyButton from './MyButton';
import image from '@/assets/homepage-banner-image.png'
import Events from './Events';
import Stories from './Stories';

const Homepage = () => {
  return (
    <>
        <Nav />
        
        {/* Banner */}
        <Grid gridTemplateColumns={{base: "none", lg:"1.4fr 1fr"}} alignItems={"center"} padding={{lg:`100px 7%`, base: "100px 5%"}} background={primaryColor} gap={{base: "10px", lg:"100px"}}>
            <Flex flexDir={"column"} gap={'20px'} color={"white"}>
                <Text fontSize={{base:size32, lg:size40}} fontWeight={"600"}>Learn futuristic in-demand technology skills collaborating with AI and Robotics</Text>
                <Text fontSize={{lg:size20, base: size16}}>Unlock a Sustainable Future: Empower Yourself with Cutting-Edge Tech Skills on Creos</Text>
                
                <Link href='/about'>
                  <MyButton inactive={false} padding={{base:'12px 36px',lg: dBtnPadding}} text={"Learn More"} fontSize={{lg:size20, base: size16}} bg={secondaryColor} color={"black"}/>
                </Link>
                
            </Flex>

            <Flex position={"relative"}>
                <Image zIndex={2} src={image.src} alt="Banner image"/>
                <Box background={secondaryColor} width={"100%"} height={"100%"} position={"absolute"} top={{base:"15px", lg:"20px"}} left={{base:"15px", lg:"20px"}} zIndex={"1"}/>
            </Flex>
        </Grid>
        
        <ToLearn />
        <Events />
        <Tools />
        <Sponsorship />
        {/* <Stories /> */}
        <NewsLetter />

        <Footer/>
    </>
  )
}

export default Homepage