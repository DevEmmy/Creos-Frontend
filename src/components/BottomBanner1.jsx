"use client"
import { primaryColor } from '@/app/theme'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MyButton from './MyButton'

const BottomBanner1 = () => {
  return (
    <>
        <Flex background={"#F3F3F3"} padding={{base: "50px 5%", lg:"100px 20%"}} flexDir={"column"} justifyItems={"center"} alignItems={"center"}>
            <Text color={primaryColor} fontSize={{base:"20px", lg:"30px"}} fontWeight={600} textAlign={"center"} >
            Stay tuned for more details and be prepared to embark on an unforgettable journey of creativity, collaboration, and celebration. See you at Creos Geek Out!
            </Text>

            <MyButton background={primaryColor} color={"white"} padding={{base: "12px 36px", lg:"24px 52px"}} fontSize={"14px"} width={"fit-content"} border={"none"} margin={"20px 0"}>
                Get Ticket
            </MyButton>
        </Flex>
    </>
  )
}

export default BottomBanner1