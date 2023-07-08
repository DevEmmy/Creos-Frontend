import { gap, primaryColor, size20, size24, size32 } from '@/app/theme'
import MyButton from '@/components/MyButton'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'

const WhyCreosHackathon = () => {
  return (
    <>
    <Flex margin={{base: "80px 5%", lg:`100px ${gap}`}} gap={"100px"} flexDir={"column"}>
         <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr"}} alignItems={"center"} gap="100px">
            <Flex flexDir={"column"} gap={"20px"}>
                <Text color={primaryColor} fontSize={{base: size24, lg: size32}} fontWeight={700}>
                    Why Creos Hackathon
                </Text>

                <Text color={"#333333"} fontWeight={600} fontSize={size20}>
                    Fueling Sustainable Innovation:
                </Text>

                <Text>
                    At Creos Hackathon, we believe in the power of collaboration and sustainable innovation. Participants will form diverse teams comprising creators, designers, engineers, and entrepreneurs. 
                </Text>

                <Text>
                    Together, you&apos;ll embark on an exhilarating journey to ideate, prototype, and refine sustainable solutions that address real-world challenges.
                </Text>

                <Text color={"#333333"} fontWeight={600} fontSize={size20}>
                    The Road to Impactful Change:
                </Text>

                <Text>
                Throughout the event, participants will receive mentorship from industry experts, engage in workshops and masterclasses, and have access to cutting-edge resources and tools. 
                </Text>

                <Text>
                At the culmination of the hackathon, teams will pitch their innovative solutions to a panel of esteemed judges, including industry leaders and impact investors, with the opportunity to secure funding and support to bring their ideas to life.
                </Text>
            </Flex>

            <Box width={"100%"} height={"300px"} background={"black"} />

        </Grid>

        <Grid gridTemplateColumns={{base: "none", lg:"1fr 1fr"}} alignItems={"center"} gap="100px">
        <Box width={"100%"} height={"300px"} background={"black"} />

            <Flex flexDir={"column"} gap={"20px"}>
               <Text>
               Join us for the groundbreaking event of the year, Creos Hackathon, where creators, innovators, and visionaries unite to shape a sustainable future aligned with the United Nations' Sustainable Development Goals. 
               </Text>

               <Text>
                Prepare to be immersed in a whirlwind of cutting-edge technologies, collaborative problem-solving, and the thrill of bringing game-changing ideas to life.
               </Text>

               <MyButton background={primaryColor} color={"white"} padding={"16px 32px"}>
                    {/* <Text> */}
                        Purchase ID
                    {/* </Text> */}
               </MyButton>
            </Flex>

        </Grid>
    </Flex>
       
    </>
  )
}

export default WhyCreosHackathon