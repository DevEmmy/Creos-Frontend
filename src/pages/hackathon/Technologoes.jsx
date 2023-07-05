'use client';
import { size16, size18, size20, size24, size32 } from '@/app/theme';
import { Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react'

const Technologoes = () => {
    const details = [
        {
            title: "Human Robots",
            description: "Embrace the power of human-robot collaboration to revolutionize industries and enhance productivity."
        },

        {
            title: "Artificial Intelligence",
            description: "Leverage the capabilities of AI to develop intelligent systems, automate processes, and optimize decision-making.",
        },
        {
            title: "3D Printing",
            description: "Unlock the potential of additive manufacturing to create sustainable products, prototypes, and customized solutions."
        },
        {
            title: "Wearable Technology",
            description: "Explore the intersection of fashion and technology to create smart wearables that enhance human capabilities and well-being."
        },
        {
            title: "Blockchain",
            description: "Harness the power of decentralized systems to revolutionize industries, ensure transparency, and enable secure transactions."
        },
        {
            title: "Quantum Computing",
            description: "Dive into the realm of quantum computing to tackle complex problems and accelerate scientific breakthroughs."
        },
        {
            title: "Renewable Energy Sources",
            description: "Develop innovative solutions that harness the power of renewable energy to combat climate change and create a sustainable future."
        },
        {
            title: "Smart Cities",
            description: "Envision the cities of tomorrow by leveraging IoT, data analytics, and smart infrastructure to enhance livability and sustainability."
        },
        {
            title: "Self-Driving Cars",
            description: "Explore the future of transportation by designing autonomous vehicles that prioritize safety, efficiency, and sustainability."
        }
    ]
  return (
    <>
        <Flex flexDir={"column"} background={"#F3F3F3"} padding={{base: "60px 5%", lg:"100px 10%"}} align={{base: "start", lg:"center"}}>
            <Text color={"#2B4E43"} fontSize={{base:size16 ,lg:size24}}>Unlock the Potential of Technologies:</Text>
            <Text color={"#333333"} textAlign={{base: "start", lg:"center"}} fontSize={{base: size20, lg: size32}} fontWeight={"600"}>During Creos Hackathon, participants have the opportunity to explore and harness the potential of the following technologies:</Text>

            <Grid gridTemplateColumns={{base: "none", lg:"repeat(3, 1fr)"}} gap={"50px"} padding={{base: "30px 0", lg:"30px"}}>
                {
                    details.map((item, index)=>{
                        return(
                            <Flex key={index} flexDir={"column"} color={"#333333"} gap="10px">
                                <Text fontSize={{base: size20, lg: size24}} fontWeight={"600"} textAlign={{base: "start", lg:"center"}}>{item.title}</Text>

                                <Text fontSize={{base: size16, lg: size18}} textAlign={{base: "start", lg:"center"}}>{item.description}</Text>
                            </Flex>
                        )
                    })
                }
            </Grid>
        </Flex>
    </>
  )
}

export default Technologoes