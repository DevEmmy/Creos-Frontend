"use client";

import { Button, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react'
import { primaryColor } from '@/app/theme';
import MyButton from '@/components/MyButton';

const HowToRegister = () => {
  return (
    <>
        <Flex flexDir={"column"} width={{base: "90%", lg:"80%"}} margin={"50px auto"} gap="30px">
            <Text textAlign={"center"} fontSize={"30px"} fontWeight={"600"}>
                How To register in three steps.
            </Text>

            <Grid gridTemplateColumns={{base: "none", lg:"2fr 1fr"}} gap="10px">
                <Flex flexDir={"column"} gap="10px">
                    <Flex padding={"10px"} border={"1px solid #eee"} flexDir={"column"} gap={"10px"}>
                        <Text>Participants are required to register through our Blockchain identification system named Creos ID. Creos ID is a revolutionary tool that harnesses the power of Blockchain technology to redefine global identity and talent scouting. It eliminates the limitations imposed by borders and opens up a world of possibilities for creators like you.</Text>

                        <Text>
                            With Creos ID, you gain access to unparalleled opportunities and become part of an exclusive community of verified top 1% achievers.
                        </Text>

                        <MyButton width={'fit-content'} background={primaryColor} color={"white"} border={0} padding={{base: "12px 36px", lg:"24px 56px"}}>
                            Purchase ID
                        </MyButton>
                    </Flex>
                    <Grid gridTemplateColumns={{base: "none", lg:"repeat(2, 1fr)"}} gap="20px">
                        <Flex
                         padding={"10px"} border={"1px solid #eee"} flexDir={"column"} gap={"10px"}>
                            <Text>
                                Fill in the form here with your Creos ID reference details and join the Telegram community group link after submitting the form.
                            </Text>

                            <MyButton width={'fit-content'} background={primaryColor} color={"white"} border={0} padding={{base: "12px 36px", lg:"24px 56px"}}>
                                Fill Form
                            </MyButton>
                        </Flex>

                        <Flex
                         padding={"10px"} border={"1px solid #eee"} flexDir={"column"} gap={"10px"}>
                            <Text>
                            Get our custom DP for free and post on twitter tagging @creoshackathon with hashtag to be featured and officially onboard.
                            </Text>

                            <MyButton width={'fit-content'} background={primaryColor} color={"white"} border={0} padding={{base: "12px 36px", lg:"24px 56px"}}>
                                Get DP
                            </MyButton>
                        </Flex>
                    </Grid>
                    
                </Flex>
            </Grid>
        </Flex>
    </>
  )
}

export default HowToRegister