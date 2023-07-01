'use client';

import { primaryColor } from '@/app/theme';
import { Flex, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillMessage, AiFillTwitterCircle } from "react-icons/ai"
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaTwitter } from "react-icons/fa"

const Socials = () => {
    const socials = [
        {
            icon: <FaTwitter />,
            title: 'Twitter',
            link: "/"
        },
        {
            icon: <FaInstagram />,
            title: 'Instagram',
            link: "/"
        },
        {
            icon: <FaLinkedin />,
            title: 'LinkedIn',
            link: "/"
        },
        {
            icon: <FaTelegram />,
            title: "Telegram",
            link: "/"
        },
        {
            icon: <FaDiscord />,
            title: "Discord",
            link: "/"
        },
        {
            icon: <FaTiktok />,
            title: "TikTok",
            link: "/"
        }
    ]
  return (
    <>
        <Flex gap="20px" background={"#FFF"} align={"center"} padding={"100px 20%"} justifyContent={"center"} flexDir={"column"}>
            <Text textAlign={"center"} fontSize={"30px"} fontWeight="600" color={primaryColor}>Connect with us today and be part of the vibrant Creos Greek Out community!</Text>
            <Text color={"#333333"} textAlign={"center"} fontSize="18px">Join us on social media to stay updated with the latest activities, inspiring success stories, and engaging community discussions.</Text>

            <Grid gridTemplateColumns={"repeat(6, 1fr)"} gap="30px">
                {socials.map(({icon, title, link}, index) => {
                    return(
                        <Link key={index} href={link} display={"flex"} alignItems={"center"} color={primaryColor}>
                            {icon}
                            <Text display={"inline"} fontWeight={600}>{title}</Text>
                        </Link>
                    )
                })}
            </Grid>
        </Flex>
    </>
  )
}

export default Socials