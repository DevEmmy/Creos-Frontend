import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import check from "@/assets/check-circle-outline.png";
import { gap, size24, size32 } from '@/app/theme';

const Purpose = () => {
    const purposes = [
        "Creos learn what’s sustainable.",
        "Creos learn futuristic in-demand technology skills by collaborating with AI and Robotics.",
        "Creos learn non-coding tech skills that earn our students at least $10,000 monthly."
    ]
  return (
    <Flex 
            flexDir={{base: "column-reverse", lg: "row-reverse"}}
            margin={{base: "70px 5%", lg: `100px 13.65%`}}
            gap={"100px"}
            >
                <Flex
                    flexDir={"column"}
                    width={{lg:"50%", base: "100%"}}
                    gap={"10px"}
                >
                    <Text
                        fontSize={{base: size24, lg: size32}}
                        fontWeight="600"
                    >
                        Why our courses are life-changing?
                    </Text>

                    {
                        purposes.map((p, i)=>{
                            return(
                                <Flex key={i} alignItems={"center"} gap="8px">
                                    <Image width={"25px"} src={check.src} alt="icon" />
                                    <Text>{p}</Text>
                                </Flex>
                            )
                        })
                    }
                </Flex>

                <Box width={{lg:"50%", base: "100%"}} height={"300px"} background={"black"} />
            
        </Flex>
  )
}

export default Purpose