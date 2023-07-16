import { primaryColor, size32 } from '@/app/theme'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Stories = () => {
    const stories = [
        {
            desc: "People I connected with at Creos events are people with purpose and global recognition in the tech space",
            person: {
                name: "Sarah Idahosa",
                picture: "https://image.cnbcfm.com/api/v1/image/107260606-1687408024023-gettyimages-1258742027-AFP_33K29V6.jpeg?v=1689446958&w=929&h=523&vtcrop=y",
                title: "Founder, web3"
            }
        },
        {
            desc: "Daniel, the founder of Creos is teaching us a lesson. To relentlessly work for the uprising of others",
            person: {
                name: "Sarah Idahosa",
                picture: "https://image.cnbcfm.com/api/v1/image/107260606-1687408024023-gettyimages-1258742027-AFP_33K29V6.jpeg?v=1689446958&w=929&h=523&vtcrop=y",
                title: "Founder, web3"
            }
        }
    ]
  return (
    <Flex
        margin={{base: "100px 5%", lg: "100px 6.4%"}}
        padding={{lg: "50px", base: "50px 20px"}}
        background={primaryColor}
        color={"white"}
        overflowX={"scroll"}
        gap={"30px"}

    >
        <Flex flexDir={"column"}>
            <Text fontSize={size32} fontWeight={600} width={"300px"} lineHeight={1}>
                Community & students stories
            </Text>
            <Text>
            Inspiring Journeys and Success Stories: Hear from the Creos Community and Students
            </Text>
        </Flex>

        <Flex gap={"20px"}>
            {
                stories.map((item, i)=>{
                    return(
                        <Flex key={i} flexDir={"column"} background={"white"} color={"black"} padding={"30px"} gap="20px" width={"300px"}>
                            <Text>{'"' + item.desc}</Text>

                            <Flex gap="10px" lineHeight={1} alignItems={"center"}>
                                <Avatar src={item.person.picture} />
                                <Flex flexDir={"column"}>
                                    <Text fontWeight={"600"}>{item.person.name}</Text>
                                    <Text>{item.person.title}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    )
                })
            }
        </Flex>
    </Flex>
  )
}

export default Stories