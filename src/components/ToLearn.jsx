"use client";

import { primaryColor, secondaryColor } from '@/app/theme';
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react'

const ToLearn = () => {
    const toLearn = [
        {
            title: "3D Art and Animation",
            price: "70",
            deadline: "Closing Soon"
        },
        {
            title: "3D Game Development",
            price: "30",
            deadline: "Closing Soon"
        },
        {
            title: "NFT Design",
            price: "89",
            deadline: "Closing Soon"
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
                                <Box width="100%" height="200px" background="#eee"/>

                                <Text fontSize={"20px"} padding={"10px 0"}>{item.title}</Text>
                                <Grid  gridTemplateColumns={"repeat(3, 1fr)"} fontSize={"14px"}>
                                    <Text>Metaverse</Text>
                                    <Text>Remote</Text>
                                    <Text>Beginner</Text>
                                </Grid>
                                <Flex py={"10px"} justifyContent={"space-between"} fontSize={"14px"}>
                                    <Text>
                                        Deadline: {item.deadline}
                                    </Text>

                                    <Flex >
                                        <Text fontSize={"10px"}>
                                            $
                                        </Text>
                                        <Text fontSize={"20px"}>
                                            {item.price}
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Button width={"fit-content"} border={"none"} background={primaryColor} padding={"15px 30px"} color={"white"} cursor={"pointer"}>
                                    Learn More
                                </Button>
                            </Flex>
                        )
                    })
                }
            </Grid>

            <Button width={"fit-content"} border={"1px solid"} color={primaryColor} background={"transparent"} padding={"20px 30px"}>
                View in all Category
            </Button>
        </Flex>
    </>
  )
}

export default ToLearn