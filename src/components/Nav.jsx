"use client";

import { primaryColor, secondaryColor } from '@/app/theme';
import { Flex, Link, Menu, MenuButton, useBreakpointValue, MenuItem, MenuList, IconButton, Text, Image } from '@chakra-ui/react'
// import Link from 'next/link';
import React, { Fragment } from 'react'
import { FaHamburger } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "@/logos/Logo.png"
import logo1 from "@/logos/Logo-1.png"
import Logo from './Logo';

const Nav = ({active = 0}) => {

    const navItems = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About Creos",
            link: "/"
        },
        {
            title: "Contact",
            link: "/"
        },
        {
            title: "Hackathon",
            link: "/hackathon"
        },
        {
            title: "Geek Out",
            link: "/geek-out"
        }
    ]


  return (
    <Fragment>
        <Flex 
        background={primaryColor}
        justifyContent={"space-between"}
        padding={{base: "10px 5%", lg:"20px 10%"}}
        alignItems={"center"}
        gap={"10px"}
        borderBottom={`2px solid ${secondaryColor}`}
        color={"white"}
        >
            <Logo />

            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                justifyItems={"center"}
                gap={"20px"}
                width={"60%"}
                display={{ base: "none", lg: "flex" }}
            >
                {
                    navItems.map((item, index) => {
                        return (
                            <Link key={index} href={item.link} color={active == index ? secondaryColor : "white"} fontWeight={ active == index && 600}>
                                    <Text>{item.title}</Text>
                            </Link>
                            )
                    })
                }
            </Flex>


            <Menu
                display={{base: "inline-flex", md: "none", lg: "none"}}
            >
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<RiMenu3Line />}
                variant='outline'
                display={{base: "inline-flex", md: "none", lg: "none"}}
                background={"white"}
            />
            <MenuList>
                
                {
                    navItems.map((item, index)=>{
                        return(
                            <Link textDecor={"none"} _hover={{"textDecor": "none"}} key={index} href={item.link} color={active == index ? secondaryColor : "black"} fontWeight={ active == index && 600}>
                                <MenuItem key={index}>
                                    <Text>{item.title}</Text>
                                </MenuItem>
                            </Link>
                        )
                    })
                }
            </MenuList>
            </Menu>
        </Flex>
    </Fragment>
  )
}

export default Nav