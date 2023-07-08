'use client';

import { dBtnPadding, primaryColor, secondaryColor, size16, size18, size20, size24, size40, xMarginLarge } from '@/app/theme'
import MyButton from '@/components/MyButton';
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <>
        <Flex 
            background={primaryColor}
            align={{base: "start", lg:"center"}}
            justify={"center"}
            flexDir={"column"}
            // height={{base: "70vh" ,lg:"90vh"}}
            px={{base: "5%", lg:"19%"}}
            py={{base: "80px", lg: "160px"}}
            // lineHeight={"1"}
            gap={"20px"}
        >
            <Text
                color={"white"}
                fontSize={{base: "32px", lg: size40}}
                fontWeight={"700"}
                textAlign={{base:"start", lg:"center"}}
            >Pioneering Sustainable Solutions for a Better Future</Text>
            <Text color={"white"}
                    fontSize={{base: "14px", lg:size20}}
                    textAlign={{base:"start", lg:"center"}}
            >
                Join us for the groundbreaking event of the year, Creos Hackathon, where creators, innovators, and visionaries unite to shape a sustainable future aligned with the United Nations&apos; Sustainable Development Goals. 
            </Text>
            <Text 
                color={"white"}
                fontSize={{base: "14px", lg:size20}}
                textAlign={{base:"start", lg:"center"}}
            >
                Prepare to be immersed in a whirlwind of cutting-edge technologies, collaborative problem-solving, and the thrill of bringing game-changing ideas to life.</Text>

                <Flex
                    alignItems={"center"}
                    flexDir={{"base": "column", lg: "row"}}
                    justifyContent={"center"}
                    gap={"10px"}
                >
                    <MyButton background={secondaryColor} color={"black"} border={"none"} padding={{base: "12px 36px", lg: dBtnPadding}} fontSize={{base: size16 ,lg:size18}}>Purchase ID</MyButton>
                    <MyButton background={primaryColor} border={`1px solid ${secondaryColor}`} color={secondaryColor} padding={{base: "12px 36px", lg:dBtnPadding}} fontSize={{base: size16 ,lg:size18}}>Get Tickets</MyButton>
                </Flex>
            
        </Flex>
    </>
  )
}

export default Banner