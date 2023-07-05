'use client';

import { primaryColor, xMarginLarge } from '@/app/theme';
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import MyButton from './MyButton';
import rec from "@/assets/rec.png"

const Sponsorship = () => {
    const sponsors = [
        {
            title: "Creos Avalon",
            desc1: "Creos Avalon, a subsidiary of Creos, is a groundbreaking program designed to mentor and support creators who are passionate about building sustainable companies that thrive in the era of artificial intelligence.",
            desc2: "We believe that combining creativity with a strong business foundation is the key to driving positive change and shaping a sustainable future.",
            buttonText: "Get Funded"
        },
        {
            title: "Creos Lab",
            desc1: "Creos Lab, a subsidiary of Creos, is a dynamic platform that empowers verified members with Creos ID to engage in paid projects proposed by top organizations and startups worldwide.",
            desc2: "It serves as a bridge connecting talented creators with exciting opportunities to collaborate, innovate, and contribute their expertise to cutting-edge projects.",
            buttonText: "Getting Sponsored"
        },
        {
            title: "Creos Scholarship",
            desc1: "Creos Scholarship is a transformative program aimed at providing opportunities for underprivileged individuals who possess a deep passion for leveraging their potential to create positive change.",
            desc2: "We firmly believe that everyone deserves a chance to pursue their dreams and unlock their full potential, regardless of their background or financial circumstances.",
            buttonText: "Apply Now"
        }
    ]
  return (
        <>
            <Flex flexDir={"column"} width={{lg:"90", base: "90%"}} margin={`100px auto`} gap={"30px"}>
                <Text textAlign={"center"} fontSize={"30px"} fontWeight={"600"}>Need funding or Scholarship</Text>

                <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr 1fr"}} gap={"50px"}>
                    {sponsors.map((tool, index) => {
                        return (
                            <Flex key={index} flexDir={"column"} gap={"20px"} padding={"10px"} border={"1px solid #eee"}>
                                <Image src={rec.src} width="100%" height="200px" background="#eee" />
                                <Flex flexDir={"column"} gap={"10px"}>
                                    <Text fontSize={"20px"} fontWeight={"600"}>{tool.title}</Text>
                                    <Text fontSize={"14px"}>{tool.desc1}</Text>
                                    <Text fontSize={"14px"}>{tool.desc2}</Text>
                                </Flex>
                                <Flex gap={"20px"} flexDir={{base: "column", lg: "row"}}>
                                    <MyButton width={"fit-content"} border={"1px solid"} color={"white"} background={primaryColor} padding={{lg:"16px 24px", base: "12px 20px"}}>
                                        {tool.buttonText}
                                    </MyButton>

                                    <MyButton width={"fit-content"} border={"1px solid"} color={primaryColor} background={"transparent"} padding={{lg:"16px 36px", base: "12px 36px"}}>
                                        Learn More
                                    </MyButton>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Grid>
               
            </Flex>
        </>
    )
}

export default Sponsorship