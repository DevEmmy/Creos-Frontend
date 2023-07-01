'use client';

import { primaryColor } from '@/app/theme';
import { Flex, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react'

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
        <Grid background={primaryColor} color={"white"} gridTemplateColumns={"1.4fr 1fr 1fr 1.2fr"} padding={"50px 10%"}>
            <Text>Creos</Text>

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


        </Grid>
    </>
  )
}

export default Footer