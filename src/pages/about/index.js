import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import NewsLetter from '@/components/NewsLetter'
import Socials from '@/components/Socials'
import React from 'react'

const index = () => {
  return (
    <>
        <Nav active={1}/>

        <NewsLetter />
        <Socials />
        <Footer />
    </>
  )
}

export default index