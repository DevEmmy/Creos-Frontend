"use client"
import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import icon10 from '@/assets/icon10.jpg'

const People = ({title, subText, people, actualImages}) => {
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
                alignItems={"st"}
                justifyContent={"center"}
                gap={{base: "20px", lg:"30px"}}
                margin={"20px 0"}
                width={"100%"}
                flexDir={{base: "column", lg: "row"}}
                flexWrap={"wrap"}
            >
                {
                    people.map((person, index)=>{
                        return(
                            <Flex key={index} minW={{base: "100%", lg:"24vw"}} maxW={{base: "100%", lg:"24vw"}} flexDir={"column"}>
                                <Image src={actualImages ? person.image : icon10.src} alt={person.name} width={"100%"} height={"300px"} objectFit={"cover"} mb="10px" loading='lazy'/>
                                <Text fontSize={{base: "18px", lg:"18px"}} fontWeight={{lg:"600", base: "600"}}>{person.name}</Text>
                                <Text fontSize={{base:"16px", lg:"16px"}}>{person.position}</Text>
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