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
            height={{base: "70vh" ,lg:"90vh"}}
            px={{base: "5%", lg:"20%"}}
            lineHeight={"1"}
            gap={"20px"}
        >
            <Text
                color={"white"}
                fontSize={{base: "35px", lg:"50px"}}
                textAlign={"center"}
                fontWeight={"600"}
            >Your Inner Geek with the Future!</Text>
            <Text color={"white"}
                    fontSize={"18px"}
                    textAlign={"center"}
            >Join us for a one-of-a-kind gathering where creators come together to have a blast, enjoy immersive experiences, and expand their networks.</Text>
            <Text 
                color={"white"}
                fontSize={"18px"}
                textAlign={"center"}
            >
                At Creos Geek Out, we believe that your network holds the key to unlocking endless opportunities and success. It's the perfect platform to foster collaboration, meet potential partners, connect with customers, and so much more.</Text>
            <Button background={secondaryColor} color={"black"} border={"none"} padding={"20px 30px"} fontSize={"14px"}>Get Tickets</Button>
        </Flex>
    </>
  )
}

export default Banner