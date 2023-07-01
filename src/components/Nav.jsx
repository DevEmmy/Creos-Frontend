"use client";

import { primaryColor, secondaryColor } from '@/app/theme';
import { Flex, Link, Menu, MenuButton, useBreakpointValue, MenuItem, MenuList, IconButton, Text } from '@chakra-ui/react'
// import Link from 'next/link';
import React, { Fragment } from 'react'
import { FaHamburger } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

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
        padding={"30px 10%"}
        gap={"10px"}
        borderBottom={`2px solid ${secondaryColor}`}
        color={"white"}
        >
            <Flex
                width={"40%"}
            >
                <Text>Creos</Text>
            </Flex>

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
            />
            <MenuList>
                
                {
                    navItems.map((item, index)=>{
                        return(
                        <MenuItem key={index}>
                            <Link key={index} href={item.link} color={active == index ? secondaryColor : "white"} fontWeight={ active == index && 600}>
                                    <Text>{item.title}</Text>
                            </Link>
                        </MenuItem>
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