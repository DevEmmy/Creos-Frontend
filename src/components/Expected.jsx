'use client'
import { primaryColor } from '@/app/theme'
import { Container, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'

const Expected = () => {
    const expected = [
        {
            title: "Immersive Experiences",
            description: "Immerse yourself in the cutting-edge technologies that are shaping the future. Get hands-on with human robots, witness the power of artificial intelligence, explore the possibilities of 3D printing"
        },
        {
            title: "Fun And Entertainment",
            description: "Geek Out is not just about business; it's about having an incredible time! Enjoy captivating performances, interactive exhibits, and thrilling showcases that will leave you inspired and amazed."
        },
        {
            title: "Networking Opportunities",
            description: "Connect with a diverse community of creators, innovators, and industry experts from around the world. Share your ideas, exchange knowledge, and forge valuable connections that can take your."
        },
        {
            title: "Inspiring Talks and Workshops",
            description: "Get inspired by visionary speakers who are at the forefront of their fields. Learn from their experiences, gain valuable insights, and discover new perspectives that can fuel your own creative journey."
        },
        {
            title: "Unforgettable Memories",
            description: "Creos Geek Out is an event that will leave a lasting impression. Capture special moments with fellow creators, immerse yourself in the vibrant atmosphere, and create memories that will stay."
        }
    ]
    return (
        <>
            <Flex width={"90%"} margin={"100px auto"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={"30px"}>
                <Flex flexDir={"column"} align={"center"} color={"#333333"}>
                    <Text fontSize={"30px"} fontWeight={"600"}>
                        What can you expect at Creos Geek Out?
                    </Text>
                    <Text >
                        Here's a glimpse into the exciting world that awaits you
                    </Text>
                </Flex>

                <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr 1fr"}} alignItems={"center"} justifyContent={"space-between"} gap={"30px"}>
                    {
                        expected.slice(0, 3).map((item, index) => {
                            return (
                                <Flex background={primaryColor} color={"white"} key={index} flexDir={"column"} width={"100%"} padding={"20px"} gap={"10px"} height={"190px"}>
                                    <Text fontWeight={"600"} fontSize={"16px"}>{item.title}</Text>
                                    <Text fontSize={"14px"}>{item.description}</Text>
                                </Flex>
                            )
                        })
                    }
                </Grid>

                <Flex gridTemplateColumns={"1fr 1fr"} flexDir={{base:"column", lg: "row"}} alignItems={"center"} justifyItems={"center"} justifyContent={"center"} gap={"30px"}>
                    {
                        expected.slice(3, 5).map((item, index) => {
                            return (
                                <Flex background={primaryColor} color={"white"} key={index} flexDir={"column"} width={{base: "100%", lg:"31.66%"}} padding={"20px"} gap={"10px"} height={"190px"}>
                                    <Text fontWeight={"600"} fontSize={"16px"}>{item.title}</Text>
                                    <Text fontSize={"14px"}>{item.description}</Text>
                                </Flex>
                            )
                        })
                    }
                </Flex>

                <Text textAlign={"center"} padding={{base: "10px 0%", lg:"20px 10%"}} color={"#333333"}>
                So mark your calendars and get ready to Geek Out with us at Creos Geek Out! Join us for a day of excitement, inspiration, and endless possibilities. Together, let's embrace our inner geeks, connect with the future, and make remarkable things happen!
                </Text>
            </Flex>
        </>
    )
}

export default Expected