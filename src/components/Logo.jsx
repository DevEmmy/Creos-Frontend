import { Flex, Image } from '@chakra-ui/react'
import React from 'react';
import logo from "@/logos/Logo.png";
import logo1 from "@/logos/Logo-1.png";

const Logo = () => {
  return (
    <Flex
    >
        <Image src={logo.src} height={"auto"}/>
        <Image src={logo1.src} height={"auto"}/>
    </Flex>
  )
}

export default Logo