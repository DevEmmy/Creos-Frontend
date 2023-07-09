import { gap, primaryColor, secondaryColor, size20, size24, size32, size40 } from '@/app/theme'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import check from "@/assets/Vector.png"

const ChangingDreams = () => {
  const reasons = [
    "All year long, the community is big on collaboration and working on ideas that matter and are game-changing.",
    "Creos are empowered to work on ideas they pitch as well and get fully funded to build and also the support of the community to accomplish.",
    "Creos are paid weekly based on deliverables saving creators from job slavery but promoting collaboration and the use of technology for social good.",
    "Creos are ten (10) decades ahead of other creators in the space due to its monthly fill of intriguing events that helps explore the future from our present. Our events are truly time machines, and we preferably love to visit the future to get informed and be most prepared."
  ]
  return (
    <Flex
        background={primaryColor} 
        flexDir={{base: "column", lg: "row"}}
        padding={{base: "70px 5%", lg: `100px ${gap}`}}
        gap="30px"
        alignItems={"center"}
    >
        <Flex
            flexDir={"column"}
            gap={"20px"}
            width={{lg: "70%", base: "100%"}}
        >   
            <Text color={secondaryColor} fontWeight={"600"} fontSize={{base: size20, lg: size32}}>
            Why Creos is the step to fulfilling creators game changing dreams?
            </Text>

            {
              reasons.map((r, i)=>{
                return(
                  <Flex color={"white"} key={i} gap="8px" alignItems={"center"}>
                      <Image width={"24px"} src={check.src} alt="icon" />
                      <Text>
                          {r}
                      </Text>
                  </Flex>
                )
              })
            }
        </Flex>

        <Box background={"white"} width={{lg:"70%", base: "100%"}} height={{base:"300px", lg: "600px"}} />
    </Flex>
  )
}

export default ChangingDreams