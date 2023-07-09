'use client';

import { gap, primaryColor } from '@/app/theme';
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react'
import MyButton from './MyButton';
import tool1 from "@/assets/tool1.png"
import tool2 from "@/assets/tool2.png"
import tool3 from "@/assets/tool3.png"
import tool4 from "@/assets/tool4.png"

const Tools = () => {
    const tools = [
        {
            title: "Creos Magazine",
            desc1: "Creos Magazine is your ultimate guide to the top achievers in the world of the Creators economy. Delve into the stories of remarkable individuals who are pushing the boundaries of creativity, innovation, and entrepreneurship.",
            desc2: "This exclusive publication grants you access to their journeys, insights, and valuable contacts, offering endless opportunities for collaboration, inspiration, and foresight.",
            buttonText: "Purchase Magazine",
            imgUrl: tool1
        },
        {
            title: "Creos ID",
            desc1: "Creos ID is a revolutionary tool that harnesses the power of blockchain technology to redefine global identity and talent scouting. It eliminates the limitations imposed by borders and opens up a world of possibilities for creators like you.",
            desc2: "With Creos ID, you gain access to unparalleled opportunities and become part of an exclusive community of verified top 1% achievers.",
            buttonText: "Purchase ID",
            imgUrl: tool2,
        },
        {
            title: "Vance",
            desc1: "Vance is a cutting-edge AI assistant designed exclusively for creators within the Creos ecosystem.",
            desc2: "With Vance by your side, you gain unparalleled access to futuristic research, enabling you to stay ahead of the curve, make informed decisions, and unlock your creative potential like never before.",
            buttonText: "Download App",
            imgUrl: tool3,
        },
        {
            title: "Creos Merch",
            desc1: "Creos Merchs is a great conversation starter and can help you connect with other members of our community. You never know who you might meet and what opportunities may arise from those connections.",
            desc2: "Creos Merchs is not only a symbol of your support for Creos, but it's also stylish and trendy. You'll look great while also representing a cause you believe in. It's a limited edition, so by purchasing it, you are getting a unique item that not everyone will have. It's a great way to stand out and show your individuality.",
            buttonText: "Purchase ID",
            imgUrl: tool4,
        }
    ]
  return (
        <>
            <Flex flexDir={"column"} padding={{base: "60px 5%", lg: `100px ${gap}`}} gap={"30px"}>
                <Text textAlign={"center"} fontSize={"30px"} fontWeight={"600"}>Best Tools you need at Creos</Text>

                <Grid gridTemplateColumns={{ base: "none", lg:"1fr 1fr"}} gap={"50px"}>
                    {tools.map((tool, index) => {
                        return (
                            <Flex key={index} height={{lg: "628px", base:"688px"}} justifyContent={"space-between"} flexDir={"column"} gap={"20px"}>
                                <Flex flexDir={"column"} gap={"20px"} position={"relative"}>
                                    <Image src={tool.imgUrl.src} width="100%" objectFit={"cover"} height="300px" background="#eee" />
                                    <Box position={"absolute"} top={0} left={0} background={"rgba(255,255,255, 0.1)"} zIndex={1} width={"100%"} height={"300px"}/>
                                <Flex flexDir={"column"} gap={"10px"}>
                                    <Text fontSize={"20px"} fontWeight={"600"}>{tool.title}</Text>
                                    <Text>{tool.desc1}</Text>
                                    <Text>{tool.desc2}</Text>
                                </Flex>
                                </Flex>
                                
                                <Flex gap={"10px"} flexDir={{base: "column", lg: "row"}}>
                                    <MyButton width={"fit-content"} border={"1px solid"} color={"white"} background={primaryColor} padding={{lg:"16px 52px", base: "12px 36px"}} text={tool.buttonText}/>
                                        
                                    <MyButton width={"fit-content"} border={"1px solid"} color={primaryColor} background={"transparent"} padding={{lg:"16px 52px", base: "12px 36px"}}>
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

export default Tools