'use client';

import { gap, primaryColor } from '@/app/theme';
import { Flex, Grid, Link, Box, Text } from '@chakra-ui/react';
import React from 'react'
import Logo from './Logo';
import { socials } from './Socials';

const Footer = () => {

    const footerLinks = [
        {
            title: "Course",
            link: "/course"
        },
        {
            title: "Hackathon",
            link: "/hackathon"
        },
        {
            title: "Geek Out",
            link: "/geek-out"
        },
        {
            title: "About Creos",
            link: "/about"
        },
        {
            title: "Blog",
            link: "/blog"
        },
        {
            title: "Creos Avalon",
            link: "/creos-avalon"
        },
        {
            title: "Creos Lab",
            link: "/creos-lab"
        },
        {
            title: "Creos Scholarship",
            link: "/creos-scholarship"
        },
        {
            title: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            title: "Terms of User",
            link: "/terms"
        },
        {
            title: "Contact Us",
            link: "/contact-us"
        },
        {
            title: "Career",
            link: "/career"
        }
    ]
  return (
    <>
    <Flex background={primaryColor} padding={"50px 10%"} flexDir={"column"} gap={'20px'}>
         <Grid color={"white"} gridTemplateColumns={{base: "1fr 1fr",lg:"2fr 1.4fr 1.4fr 1.4fr 1fr 1fr"}} gap={"20px"} alignItems={"start"}>
            <Flex display={{base: "none", lg: "flex"}}>
                <Logo />
            </Flex>
            

            <Flex
                flexDir="column"
                gap={"20px"}
            >
                {
                    footerLinks.splice(0, 5).map((item, index)=>{
                        return(
                            <Link href={item.link} key={index}>
                                {item.title} 
                            </Link>
                        )
                    })
                }
            </Flex>

            <Flex
                flexDir="column"
                gap={"20px"}
            >
                {
                    footerLinks.splice(0, 4).map((item, index)=>{
                        return(
                            <Link href={item.link} key={index}>
                                {item.title} 
                            </Link>
                        )
                    })
                }
            </Flex>

            <Flex
                flexDir="column"
                gap={"20px"}
            >
                {
                    footerLinks.splice(0, 4).map((item, index)=>{
                        return(
                            <Link href={item.link} key={index}>
                                {item.title} 
                            </Link>
                        )
                    })
                }
            </Flex>

            <Flex
                flexDir="column"
                gap={"20px"}
            >

            
            <Text>
                Socials
            </Text>   
                {
                    socials.slice(0, 3).map(({icon, title, link}, index)=>{
                        return(
                            <Link key={index} href={link} display={"flex"} alignItems={"center"} color={"white"}>
                            {icon}
                            <Text display={"inline"} fontSize={{base: "16px", lg: "16px"}}>{title}</Text>
                        </Link>
                        )
                    })
                }
            </Flex>

            <Flex
                flexDir="column"
                gap={"20px"}
            >
            <Box height={"20px"}/>
                {
                    socials.slice(3, 6).map(({icon, title, link}, index)=>{
                        return(
                            <Link key={index} href={link} display={"flex"} alignItems={"center"} color={"white"}>
                            {icon}
                            <Text display={"inline"} fontSize={{base: "16px", lg: "16px"}}>{title}</Text>
                        </Link>
                        )
                    })
                }
            </Flex>

            <Box />

            <Flex display={{base: "flex", lg: "none"}}>
                <Logo />
            </Flex>

        </Grid>

        <Text color={"white"} textAlign={"center"}>
            &copy; creos| All rights reserved 2021 - 2023
        </Text>
    </Flex>
       
    </>
  )
}

export default Footer