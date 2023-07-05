'use client';

import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react'
import { primaryColor, size20, size24, size40, xMarginLarge } from '@/app/theme';

const What = () => {
  return (
    <>
        <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr"}} width={{base:"90%", lg:"auto"}} margin={{base: "80px 5%", lg:`100px ${xMarginLarge}`}} flexDir={"column-reverse"} display={{base: "flex", lg: "grid"}} gap={"20px"}>
            <Box width={"70%"} height={"400px"} background={"black"}>

            </Box>

            <Flex flexDir={"column"} gap={"20px"}>
                <Text color={primaryColor} fontSize={{lg:size40, base: size20}} fontWeight={600}>
                What is Creos Hackathon?
                </Text>

                <Text fontSize={{lg: size24, base: size20}}>
                    Creos Hackathon is a dynamic and intensive event that harnesses the power of human creativity and emerging technologies to tackle global challenges. 
                </Text>

                <Text fontSize={{lg: size24, base: size20}}>
                    Over the course of the event, participants will form diverse teams and leverage a wide array of groundbreaking technologies to develop sustainable solutions that address pressing issues in line with the United Nations&apos; Sustainable Development Goals.
                </Text>
            </Flex>
        </Grid>
    </>
  )
}

export default What