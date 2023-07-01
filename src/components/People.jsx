"use client"
import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const People = ({title, subText, people}) => {
  return (
    <>
        <Flex
            alignItems={"center"}
            flexDir={"column"}
            width={{lg:"80%", base:"90%"}}
            margin={"80px auto"}
        >
            <Text
                fontSize={"26px"}
                fontWeight={"600"}
                textAlign={"center"}
            >{title}</Text>
            <Text textAlign={"center"}>{subText}</Text>
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={{base: "20px", lg:"30px"}}
                margin={"20px 0"}
            >
                {
                    people.map((person, index)=>{
                        return(
                            <Flex key={index} width={"100%"} flexDir={"column"}>
                                <Image src={person.image} width={"100%"} height={"30%"} objectFit={"cover"} mb="10px"/>
                                <Text fontSize={{base: "14px", lg:"16px"}} fontWeight={{lg:"600", base: "600"}}>{person.name}</Text>
                                <Text fontSize={{base:"10px", lg:"14px"}}>{person.position}</Text>
                            </Flex>
                        )
                    })
                }
            </Flex>
            </Flex>

            
    </>
  )
}

export default People