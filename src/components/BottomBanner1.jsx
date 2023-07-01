"use client"
import { primaryColor } from '@/app/theme'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const BottomBanner1 = () => {
  return (
    <>
        <Flex background={"#F3F3F3"} padding={{base: "50px 5%", lg:"100px 20%"}} flexDir={"column"} justifyItems={"center"} alignItems={"center"}>
            <Text color={primaryColor} fontSize={{base:"20px", lg:"30px"}} fontWeight={600} textAlign={"center"} >
            Stay tuned for more details and be prepared to embark on an unforgettable journey of creativity, collaboration, and celebration. See you at Creos Geek Out!
            </Text>

            <Button background={primaryColor} color={"white"} padding={"20px 30px"} fontSize={"14px"} width={"fit-content"} border={"none"} margin={"20px 0"}>
                Get Ticket
            </Button>
        </Flex>
    </>
  )
}

export default BottomBanner1