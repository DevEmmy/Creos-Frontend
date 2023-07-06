import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import NewsLetter from '@/components/NewsLetter'
import Socials from '@/components/Socials'
import React from 'react'
import Banner from './Banner'
import Expected from './Expected'

const index = () => {
  return (
    <>
        <Nav active={1}/>
        <Banner />
        <Expected />
        <NewsLetter />
        <Socials />
        <Footer />
    </>
  )
}

export default index