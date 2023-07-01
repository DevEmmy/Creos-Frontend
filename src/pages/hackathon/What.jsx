'use client';

import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react'
import { primaryColor } from '../theme';

const What = () => {
  return (
    <>
        <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr"}} width={{base:"90%", lg:"80%"}} margin={"100px auto"} flexDir={"column-reverse"} display={{base: "flex", lg: "grid"}} gap={"20PX"}>
            <Box width={"70%"} height={"400px"} background={"black"}>

            </Box>

            <Flex flexDir={"column"} gap={"20px"}>
                <Text color={primaryColor} fontSize={"30px"} fontWeight={600}>
                What is Creos Hackathon?
                </Text>

                <Text>
                    Creos Hackathon is a dynamic and intensive event that harnesses the power of human creativity and emerging technologies to tackle global challenges. 
                </Text>

                <Text>
                    Over the course of the event, participants will form diverse teams and leverage a wide array of groundbreaking technologies to develop sustainable solutions that address pressing issues in line with the United Nations' Sustainable Development Goals.
                </Text>
            </Flex>
        </Grid>
    </>
  )
}

export default What