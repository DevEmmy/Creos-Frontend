'use client';

import { primaryColor } from '@/app/theme';
import { Flex, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillMessage, AiFillTwitterCircle } from "react-icons/ai"
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaTwitter } from "react-icons/fa"

export const socials = [
    {
        icon: <FaTwitter />,
        title: 'Twitter',
        link: "https://twitter.com/creosxyz"
    },
    {
        icon: <FaInstagram />,
        title: 'Instagram',
        link: "https://www.instagram.com/creos.xyz/"
    },
    {
        icon: <FaLinkedin />,
        title: 'LinkedIn',
        link: "https://www.linkedin.com/company/creosworkforce/"
    },
    {
        icon: <FaTelegram />,
        title: "Telegram",
        link: "https://t.me/creosgeekout"
    },
    {
        icon: <FaDiscord />,
        title: "Discord",
        link: "https://discord.gg/WR7m97x7"
    },
    {
        icon: <FaTiktok />,
        title: "TikTok",
        link: "https://www.tiktok.com/@creosxyz"
    }
]

const Socials = () => {
    
  return (
    <>
        <Flex gap="20px" background={"#FFF"} align={"center"} padding={{base: "50px 10px", lg:"100px 20%"}} justifyContent={"center"} flexDir={"column"}>
            <Text textAlign={"center"} fontSize={{base: "20px", lg:"30px"}} fontWeight="600" color={primaryColor}>Connect with us today and be part of the vibrant Creos Greek Out community!</Text>
            <Text color={"#333333"} textAlign={"center"} fontSize={{base: "14px", lg:"18px"}}>Join us on social media to stay updated with the latest activities, inspiring success stories, and engaging community discussions.</Text>

            <Grid gridTemplateColumns={{base: "repeat(3, 1fr)", lg:"repeat(6, 1fr)"}} gap={{base: "20px", lg:"30px"}}>
                {socials.map(({icon, title, link}, index) => {
                    return(
                        <Link key={index} href={link} display={"flex"} alignItems={"center"} gap="5px" color={primaryColor}>
                            {icon}
                            <Text display={"inline"} fontSize={{base: "16px", lg: "16px"}} fontWeight={600}>{title}</Text>
                        </Link>
                    )
                })}
            </Grid>
        </Flex>
    </>
  )
}

export default Socials