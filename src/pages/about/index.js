import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import NewsLetter from '@/components/NewsLetter'
import Socials from '@/components/Socials'
import React from 'react'
import Banner from './Banner'
import Expected from './Expected'
import Purpose from './Purpose'
import ChangingDreams from './ChangingDreams'
import Values from './Values'
import People from './People'

const index = () => {

  const members = {
    title: "Meet our Hosts",
    subText: "One of them is hot cake and the second is a daily breakfast server! Don’t miss the party!!!",
    people: [
      {
        name: "Daniel O. Lumiere",
        position: "Founder & CEO, Creos.",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Maxwell",
        position: "Programs Manager",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Ola",
        position: "Media Convener",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Precious",
        position: "Media Convener",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Opeyemi Event Manager",
        position: "Event Manager",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Oluwatunmise",
        position: "Creative Designer",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Emmanuel",
        position: "Full stack Developer",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Stephen",
        position: "Lead UI/Ux Designer",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
    ]
  }

  return (
    <>
        <Nav active={1}/>
        <Banner />
        <Expected />
        <Purpose />
        <ChangingDreams />
        <Values />
        <People {...members}/>
        <NewsLetter />
        {/* <Socials /> */}
        <Footer />
    </>
  )
}

export default index