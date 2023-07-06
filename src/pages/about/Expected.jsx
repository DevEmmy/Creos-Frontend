import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Expected = () => {
  return (
    <>
        <Flex 
            flexDir={{base: "column-reverse", lg: "row"}}
            margin={{base: "70px 5%", lg: `100px 10%`}}
            gap={"20px"}
            >
                <Flex
                    flexDir={"column"}
                    width={"70%"}
                >
                    <Text

                    >
                        Why should we expect these scary statics?
                    </Text>

                    <Text>
                    In the year 2022 towards 2023, over 50,000 skilled workers were laid off from their jobs, and most surprisingly, this was an incident from the top companies on the planet. This is due to the rapidly evolving landscape of emerging technologies and has caused skills gap between what the workforce currently has and what organizations need globally.
                    </Text>

                    <Text>
                    More reasons? Emerging technologies such as artificial intelligence and robotics will help businesses save the cost of certain jobs recruiting as Artificial intelligence is early believed to best automate jobs and deliver faster than humans. As much as we don't believe they replace us but rather assist humans with work, this is only possible when humans pick on harnessing potentials that enable us to collaborate with them on more important goals and missions assigned.
                    </Text>

                    <Text>
                    Another thought would be, what are these possible potentials or skills? At Creos, we spend adequate time with artificial intelligence studying and researching what's next. As we keep base on our major focus to empower creators and non-creators for the present and the future. Our research has enabled us to recognize current skills that will still be relevant even in the age of AI & robotics technology and discover new skills that would be in demand at this age.
                    </Text>
                </Flex>

                <Box width={"80%"} height={"300px"} background={"black"} />
            
        </Flex>
    
    </>
  )
}

export default Expected