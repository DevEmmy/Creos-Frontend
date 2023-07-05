import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MyButton from './MyButton'
import { primaryColor, secondaryColor, size18, size24, size32, size40, xMarginLarge } from '@/app/theme'

const Events = () => {
    const events = [
        {
            title: "Creos Hackathon",
            desc1: "Join us for the groundbreaking event of the year, Creos Hackathon, where creators, innovators, and visionaries unite to shape a sustainable future aligned with the United Nations' Sustainable Development Goals.",
            desc2: "Prepare to be immersed in a whirlwind of cutting-edge technologies, collaborative problem-solving, and the thrill of bringing game-changing ideas to life.",
            videoLink: "",
        },
        {
            title: 'Creos Geek Out',
            desc1: "Join us for a one-of-a-kind gathering where creators come together to have a blast, enjoy immersive experiences, and expand their networks.",
            desc2: "At Creos Geek Out, we believe that your network holds the key to unlocking endless opportunities and success. It's the perfect platform to foster collaboration, meet potential partners, connect with customers, and so much more.",
            videoLink: "",
        }
    ]
  return (
    <>
        <Flex
            background={"#E8E8E8"}
            flexDir={"column"}
            gap={"30px"}
            padding={{base: "60px 5%", lg: `{100px ${xMarginLarge}}`}}
        >
            <Text
                textAlign={"center"}
                fontSize={{base: size32, lg: size40}}
                fontWeight={600}
            >
                Our Events are Timeless
            </Text>
            {
                events.map((event, index) => {
                    return (
                        <Flex 
                            key={index}
                            flexDir={"column"}
                            background={primaryColor}
                            padding={{base: "20px", lg:"50px"}}
                            color={"white"}
                            gap={"10px"}
                        >
                            <Text color={secondaryColor} fontSize={{lg: size32, base: size24}} fontWeight={600}>{event.title}</Text>
                            <Text fontSize={{base: size18, lg: size24}}>{event.desc1}</Text>
                            <Text fontSize={{base: size18, lg: size24}}>{event.desc2}</Text>

                            <Flex flexDir={{base: "column", lg: "row"}} gap={"10px"}>
                                <MyButton
                                    background={secondaryColor}
                                    color={"black"}
                                    padding={{base:'12px 36px', lg:'24px 52px'}}
                                >
                                    Get Tickets
                                </MyButton>
                                <MyButton color={secondaryColor} border={"1px solid"}  padding={{base:'12px 36px', lg:'24px 52px'}}>
                                    {"Join" + " " + event.title}
                                </MyButton>
                            </Flex>

                            <Box width={"100%"} height={"500px"} background={"white"}/>
                        </Flex>
                    )
                })
            }
        </Flex>
    </>
  )
}

export default Events