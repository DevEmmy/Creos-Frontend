'use client';

import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react'
import { dBtnPadding, gap, primaryColor, secondaryColor, size16, size18, size20, size24, size32, size40, xMarginLarge } from '@/app/theme';
import { ticketLink } from '@/utils/data';
import MyButton from '@/components/MyButton';

const What = () => {
  return (
    <>
        <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr"}} width={{base:"90%", lg:"auto"}} margin={{base: "80px 5%", lg:`100px ${gap}`}} flexDir={"column"} display={{base: "flex", lg: "grid"}} gap={{base:"30px", lg:"100px"}} alignItems={"center"}>
            <Box width={"100%"} height={"400px"} background={"black"}>

            </Box>

            <Flex flexDir={"column"} gap={"20px"}>
                <Text color={primaryColor} fontSize={{lg:size32, base: size20}} fontWeight={600}>
                What is Creos Hackathon?
                </Text>

                <Text fontSize={{lg: size20, base: size16}}>
                    Creos Hackathon is a dynamic and intensive event that harnesses the power of human creativity and emerging technologies to tackle global challenges. 
                </Text>

                <Text fontSize={{lg: size20, base: size16}}>
                    Over the course of the event, participants will form diverse teams and leverage a wide array of groundbreaking technologies to develop sustainable solutions that address pressing issues in line with the United Nations&apos; Sustainable Development Goals.
                </Text>

                {/* <Link href={ticketLink}> */}
                <MyButton background={primaryColor} color={"white"} padding={{base: "12px 36px", lg:dBtnPadding}} fontSize={{base: size16 ,lg:size18}}>
                            Get Tickets
                        </MyButton>
                {/* </Link> */}
            </Flex>
        </Grid>
    </>
  )
}

export default What