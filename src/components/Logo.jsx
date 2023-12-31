import { Flex, Image, Link } from '@chakra-ui/react'
import React from 'react';
import logo from "@/logos/Logo.png";

const Logo = () => {
  return (
    <Flex
      width={{base: "119px", lg:"200px"}}
    >
        {/* imported logo */}
        <Link href='/'>
          <Image src={logo.src} alt="logo" height={"auto"} width={"100%"}/>
        </Link>
        
    </Flex>
  )
}

export default Logo