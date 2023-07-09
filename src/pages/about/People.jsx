"use client"
import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const People = ({title, subText, people}) => {
  return (
    <>
        <Flex
            alignItems={"center"}
            flexDir={"column"}
            // width={{lg:"80%", base:"90%"}}
            padding={{lg:"80px 6.6%", base: "70px 5%"}}
        >
            <Text
                fontSize={"26px"}
                fontWeight={"600"}
                textAlign={"center"}
            >{title}</Text>
            <Text textAlign={"center"}>{subText}</Text>
            <Grid
                alignItems={"center"}
                justifyContent={"center"}
                gap={{base: "20px", lg:"30px"}}
                margin={"20px 0"}
                width={"100%"}
                flexDir={{base: "column", lg: "row"}}
                gridTemplateColumns={{base: "none", lg:"1fr 1fr 1fr 1fr"}}
            >
                {
                    people?.map((person, index)=>{
                        return(
                            <Flex key={index} width={{base: "100%", lg:"100%"}} flexDir={"column"}>
                                <Image src={person.image} alt={person.name} width={"100%"} height={"30%"} objectFit={"cover"} mb="10px"/>
                                <Text fontSize={{base: "16px", lg:"18px"}} fontWeight={{lg:"600", base: "600"}}>{person.name}</Text>
                                <Text fontSize={{base:"14px", lg:"16px"}}>{person.position}</Text>
                            </Flex>
                        )
                    })
                }
            </Grid>
            </Flex>

            
    </>
  )
}

export default People