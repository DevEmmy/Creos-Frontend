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
            px={{base: "5%", lg:xMarginLarge}}
            py={{base: "80px", lg: "120px"}}
            // lineHeight={"1"}
            gap={"20px"}
        >
            <Text
                color={"white"}
                fontSize={{base: "32px", lg: size40}}
                fontWeight={"700"}
                textAlign={{base:"start", lg:"center"}}
            >
                About Creos 
            </Text>
            <Text color={"white"}
                    fontSize={{base: "14px", lg:size20}}
                    textAlign={{base:"start", lg:"center"}}
            >
                Creos “a Spanish word” mean Creators “in English” and our story began a minute in the year 2418 when we realized the future demand of the workforce. 
            </Text>
            <Text 
                color={"white"}
                fontSize={{base: "14px", lg:size20}}
                textAlign={{base:"start", lg:"center"}}
            >
                By 2025, there will be a shortage of 85.2 million skilled workers globally, representing a massive opportunity for companies like Creos to keep Africa and the planet awake and prepared for the future said (Korn Ferry, 2018).</Text>

                {/* <Flex
                    alignItems={"center"}
                    flexDir={{"base": "column", lg: "row"}}
                    justifyContent={"center"}
                    gap={"10px"}
                >
                    <MyButton background={secondaryColor} color={"black"} border={"none"} padding={{base: "12px 36px", lg: dBtnPadding}} fontSize={{base: size16 ,lg:size18}}>Purchase ID</MyButton>
                    <MyButton background={primaryColor} border={`1px solid ${secondaryColor}`} color={secondaryColor} padding={{base: "12px 36px", lg:dBtnPadding}} fontSize={{base: size16 ,lg:size18}}>Get Tickets</MyButton>
                </Flex>
             */}
        </Flex>
    </>
  )
}

export default Banner