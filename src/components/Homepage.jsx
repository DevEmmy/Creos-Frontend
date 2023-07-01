"use client";

import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import { Button, Flex, Grid, Text } from '@chakra-ui/react';
import { primaryColor, secondaryColor } from '@/app/theme';
import ToLearn from './ToLearn';
import Tools from './Tools';
import Sponsorship from './Sponsorship';
import NewsLetter from './NewsLetter';

const Homepage = () => {
  return (
    <>
        <Nav />
        
        {/* Banner */}
        <Grid gridTemplateColumns={"1fr 1fr"} padding={"100px 10%"} background={primaryColor}>
            <Flex flexDir={"column"} gap={'20px'} color={"white"}>
                <Text fontSize={"40px"} fontWeight={"600"}>Learn futuristic in-demand technology skills collaborating with AI and Robotics</Text>
                <Text fontSize={"16px"}>Unlock a Sustainable Future: Empower Yourself with Cutting-Edge Tech Skills on Creos</Text>
                <Button width={"fit-content"} border={"none"} background={secondaryColor} padding={"20px 30px"}>
                    Learn More
                </Button>
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