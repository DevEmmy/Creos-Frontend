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
                width={"100%"}
                flexDir={{base: "column", lg: "row"}}
            >
                {
                    people.map((person, index)=>{
                        return(
                            <Flex key={index} width={{base: "100%", lg:"24vw"}} flexDir={"column"}>
                                <Image src={person.image} alt={person.name} width={"100%"} height={"30%"} objectFit={"cover"} mb="10px"/>
                                <Text fontSize={{base: "18px", lg:"20px"}} fontWeight={{lg:"600", base: "600"}}>{person.name}</Text>
                                <Text fontSize={{base:"16px", lg:"20px"}}>{person.position}</Text>
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