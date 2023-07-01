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
            <InputGroup width={"60%"}>
                <Input p={"17px 20px"} _focus={{'outline': "none"}} width={"100%"} placeholder='Enter your Email' borderRadius={"10px 0 0 10px"} border={"2px solid #eee"}/>
                <InputRightAddon>
                    <Button p="18px" borderRadius={"0 10px 10px 0"} background={primaryColor} color={"white"} border={0}>
                        Subscribe
                    </Button>
                </InputRightAddon>
            </InputGroup>
        </Flex>
    
    </>
  )
}

export default NewsLetter