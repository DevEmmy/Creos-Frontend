"use client"
import { Flex, Grid, ListItem, Text, List, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { primaryColor } from '../theme'
import Hackathon from './Hackathon'

const Prizes = () => {
  return (
    <>
        <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap="30px" margin={"50px 10%"} color={"white"}>
            <Flex background={primaryColor} flexDir={"column"} padding={"20px"} gap="10px">
                <Text fontSize={"16px"} fontWeight={"600"}>Submission Countdown</Text>
                <UnorderedList fontSize={"14px"}>
                    <ListItem>1st of July - 31st of August</ListItem>
                    <ListItem>Creos Hackathon Event Finale 2023 - 7th of October</ListItem>
                </UnorderedList>
            </Flex>

            <Flex background={primaryColor} flexDir={"column"} padding={"20px"} gap="10px">
                <Text fontSize={"16px"} fontWeight={"600"}>Overall Prizes</Text>
                <UnorderedList fontSize={"14px"}>
                    <ListItem>$10,000 USD Grand Prize</ListItem>
                    <ListItem>$5,000 USD 2nd Prize</ListItem>
                    <ListItem>$2,000 USD 3rd Prize</ListItem>
                </UnorderedList>
            </Flex>
            
            <Flex background={primaryColor} flexDir={"column"} padding={"20px"} gap="10px">
                <Text fontSize={"16px"} fontWeight={"600"}>More Swags Hackathon</Text>
                <Text fontSize={"14px"}>
                Winners will trip with the Creos team, sponsors and partners in Dubai for celebration, collaboration and momentum bonding.
                </Text>
            </Flex>
        </Grid>
    </>
  )
}

export default Prizes