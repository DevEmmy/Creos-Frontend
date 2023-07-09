"use client";

import { primaryColor, secondaryColor } from '@/app/theme';
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react'
import MyButton from './MyButton';
import animation from "@/assets/animation.jpg";
import gameDev from "@/assets/gameDev.jpg"
import nft from "@/assets/nft.jpg";
import shapePlus from "@/assets/shape-plus.png";
import carbonLevel from "@/assets/carbon_skill-level-basic.png"
import castEducation from "@/assets/cast-education.png"

const ToLearn = () => {
    const toLearn = [
        {
            title: "3D Art and Animation",
            price: "70",
            deadline: "Closing Soon",
            imgUrl: animation
        },
        {
            title: "3D Game Development",
            price: "30",
            deadline: "Closing Soon",
            imgUrl: gameDev
        },
        {
            title: "NFT Design",
            price: "89",
            deadline: "Closing Soon",
            imgUrl: nft
        }
    ]
  return (
    <>
        <Flex flexDir={"column"} width={{lg:"80%", base: "90%"}} margin={"100px auto"} gap={"30px"}>
            <Text textAlign={"center"} fontSize={"30px"} fontWeight={"600"}>
                What to start Learning?
            </Text>

            <Grid gridTemplateColumns={{base: "none" , lg:"repeat(3, 1fr)"}} gap={"30px"}>
                {
                    toLearn.map((item, i)=>{
                        return(
                            <Flex key={i} border={"1px solid #eee"} flexDir={"column"} padding={"10px"}>
                                {/* <Box width="100%" height="200px" background="#eee"/> */}
                                <Image src={item.imgUrl.src} alt={item.title} width="100%" height="200px" />

                                <Text fontSize={{base: "20px", lg:"24px"}} 
                                fontWeight={"600"}
                                noOfLines={1}
                                padding={"10px 0"}>{item.title}</Text>
                                <Grid  gridTemplateColumns={"repeat(3, 1fr)"} fontSize={"14px"}>
                                    <Flex alignItems={"center"} gap="1px">
                                        <Image src={shapePlus.src} alt="icon" width="14px" height={"14px"}/>
                                        <Text>Metaverse</Text>
                                    </Flex>

                                    <Flex alignItems={"center"} gap="1px">
                                        <Image src={carbonLevel.src} alt="icon" width="14px" height={"14px"}/>
                                        <Text>Remote</Text>
                                    </Flex>

                                    <Flex alignItems={"center"} gap="1px">
                                        <Image src={castEducation.src} alt="icon" width="14px" height={"14px"}/>
                                        <Text>Beginner</Text>
                                    </Flex>
                                    
                                </Grid>
                                <Flex py={"10px"} justifyContent={"space-between"} fontSize={{base:"16px", lg:"16px"}} alignItems={"center"}>
                                    <Text>
                                        Deadline: {item.deadline}
                                    </Text>

                                    <Flex fontWeight={600}>
                                        <Text fontSize={"10px"}>
                                            $
                                        </Text>
                                        <Text fontSize={{base: "24px", lg:"24px"}}>
                                            {item.price}
                                        </Text>
                                    </Flex>
                                </Flex>

                                <MyButton width={"fit-content"} border={"none"} bg={primaryColor} padding={{base: "12px 36px", lg:"16px 52px"}} color={"white"} cursor={"pointer"} text="Learn More"/>
                            </Flex>
                        )
                    })
                }
            </Grid>

            <MyButton width={"fit-content"} border={"1px solid"} color={primaryColor} background={"transparent"} padding={"20px 30px"} text="View in all Category" margin={"20px auto"}/>
            
        </Flex>
    </>
  )
}

export default ToLearn