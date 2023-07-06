'use client';

import { primaryColor, secondaryColor, size16, size20 } from '@/app/theme'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MyButton from './MyButton';

const Banner = () => {
  return (
    <>
        <Flex 
            background={primaryColor}
            align={{base: "start", lg:"center"}}
            justify={"center"}
            flexDir={"column"}
            // height={{base: "70vh" ,lg:"98vh"}}
            px={{base: "5%", lg:"22%"}}
            py={{base: "80px", lg: "120px"}}
            // lineHeight={"1"}
            gap={"20px"}
        >
            <Text
                color={"white"}
                fontSize={{base: "32px", lg:"50px"}}
                textAlign={{base: "start", lg:"center"}}
                fontWeight={"600"}
            >Your Inner Geek with the Future!</Text>
            <Text color={"white"}
                    fontSize={"18px"}
                    textAlign={{base: "start", lg:"center"}}
            >Join us for a one-of-a-kind gathering where creators come together to have a blast, enjoy immersive experiences, and expand their networks.</Text>
            <Text 
                color={"white"}
                fontSize={"18px"}
                textAlign={{base: "start", lg:"center"}}
            >
                At Creos Geek Out, we believe that your network holds the key to unlocking endless opportunities and success. It&apos;s the perfect platform to foster collaboration, meet potential partners, connect with customers, and so much more.</Text>
            <MyButton background={secondaryColor} color={"black"} border={"none"} padding={{base: "12px 36px", lg:"24px 52px"}} fontSize={{base: size16 ,lg:size20}}>Get Tickets</MyButton>
        </Flex>
    </>
  )
}

export default Banner