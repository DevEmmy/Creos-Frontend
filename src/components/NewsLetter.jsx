'use client';

import { primaryColor } from '@/app/theme';
import { Button, Flex, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import React from 'react'

const NewsLetter = () => {
  return (
    <>
        <Flex flexDir={"column"} width={"80%"} margin={"100px auto"} color={"#444444"} gap={"10px"} align={"center"} justify={"center"}>
            <Text fontSize={"30px"} fontWeight={"600"}>Join Our Newsletter</Text>
            <Text fontSize={"16px"}>Stay up to date with the hottest Creators tool and news</Text>
            <InputGroup width={{lg:"60%", base: "90%"}} flexDir={{base:"column", lg: "row"}} gap={{base: "10px", lg: "0"}}>
                <Input p={"24px 20px"} _focus={{'outline': "none"}} width={"100%"} placeholder='Enter your Email' borderRadius={{base: "0", lg:"10px 0 0 10px"}} border={"2px solid #eee"}/>
                <InputRightAddon display={{base: "none", lg: "block"}}>
                    <Button p="18px" borderRadius={{base: "10px",lg:"0 10px 10px 0"}} background={primaryColor} color={"white"} border={0}>
                        Subscribe
                    </Button>
                </InputRightAddon>
                <Button p="24px" borderRadius={"0px"}  background={primaryColor} color={"white"} border={0}>
                        Subscribe
                </Button>
            </InputGroup>
        </Flex>
    
    </>
  )
}

export default NewsLetter