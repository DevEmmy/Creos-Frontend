import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import check from "@/assets/check-circle-outline.png";
import { primaryColor, size20, size32 } from '@/app/theme';

const Values = () => {
    const values = [
        "Community focused.",
        "Top 1% of tech achievers on the planet.",
        "Global problem solvers and solutions creator.",
        "All-round ahead of the world information curve."
    ]


    const convictions = [
        "can never know enough but I can learn to know more than my enough.",
        "By all ways, I utilize my power to empower.",
        "My freewill to do is my biggest contribution to changing the world.",
        "My ideas matter, Creos believe in me.",
        "The next big success Creos will celebrate me for, is the solution I become to my world."
    ]
  return (
    <Flex padding={{base: "50px 5%", lg: "70px 10%"}} gap={"20px"} flexDir={{base: "column", lg: "row"}}>

        <Flex width={{base:"100%", lg:"50%"}} gap={"10px"} flexDir={"column"}>
            <Text color={primaryColor} fontWeight={600} fontSize={{base: size20, lg: size32}}>
                Creos Core Values
            </Text>

            {
                values.map((v, i)=>{
                    return(
                        <Flex key={i} alignItems={"center"} gap="4px">
                            <Image src={check.src} alt="icon" w="30px"/>
                            <Text>{v}</Text>
                        </Flex>
                    )
                })
            }
        </Flex>

        <Flex width={{base:"100%", lg:"50%"}} gap={"10px"} flexDir={"column"}>
            <Text color={primaryColor} fontWeight={600} fontSize={{base: size20, lg: size32}}>
                Creos Five Convictions
            </Text>

            {
                convictions.map((v, i)=>{
                    return(
                        <Flex key={i} alignItems={"center"} gap="4px">
                            <Image src={check.src} w="30px" alt="icon" />
                            <Text>{v}</Text>
                        </Flex>
                    )
                })
            }
        </Flex>
    </Flex>
  )
}

export default Values