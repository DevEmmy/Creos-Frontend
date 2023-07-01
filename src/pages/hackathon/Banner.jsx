'use client';

import { primaryColor, secondaryColor } from '@/app/theme'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <>
        <Flex 
            background={primaryColor}
            align={"center"}
            justify={"center"}
            flexDir={"column"}
            height={"90vh"}
            px={"20%"}
            gap={"20px"}
        >
            <Text
                color={"white"}
                fontSize={"50px"}
                fontWeight={"600"}
                textAlign={"center"}
            >Pioneering Sustainable Solutions for a Better Future</Text>
            <Text color={"white"}
                    fontSize={"18px"}
                    textAlign={"center"}
            >
                Join us for the groundbreaking event of the year, Creos Hackathon, where creators, innovators, and visionaries unite to shape a sustainable future aligned with the United Nations' Sustainable Development Goals. 
            </Text>
            <Text 
                color={"white"}
                fontSize={"18px"}
                textAlign={"center"}
            >
                Prepare to be immersed in a whirlwind of cutting-edge technologies, collaborative problem-solving, and the thrill of bringing game-changing ideas to life.</Text>

                <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"30px"}
                >
                    <Button background={secondaryColor} color={"black"} border={"none"} padding={"20px 30px"} fontSize={"14px"}>Purchase ID</Button>
                    <Button background={primaryColor} border={`1px solid ${secondaryColor}`} color={secondaryColor} padding={"20px 30px"} fontSize={"14px"}>Get Tickets</Button>
                </Flex>
            
        </Flex>
    </>
  )
}

export default Banner