import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Expected from './Expected'
import People from './People'
import Footer from './Footer'
import BottomBanner1 from './BottomBanner1'
import Socials from './Socials'
import A from "@/assets/A.jpeg";
import B from "@/assets/B.JPG";

const GeekOut = () => {
  const specialGuest = {
    title: "Special Guest Appearence",
    subText: "Meet with celebrities, your top industry experts and investors",
    people: [
      {
        name: "Deborah Ojengbede",
        position: "CEO AFEN Blockchain Group",
        image: A.src
      },
      {
        name: "Okoye Chinelo",
        position: "Visionary Brand Strategist",
        image: B.src
      },
    ]
  }

  const hosts = {
    title: "Meet our Hosts",
    subText: "One of them is hot cake and the second is a daily breakfast server! Don’t miss the party!!!",
    people: [
      {
        name: "Kathryn Murphy",
        position: "Founder, Louis Vuitton",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Kathryn Murphy",
        position: "Founder, Louis Vuitton",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Kathryn Murphy",
        position: "Founder, Louis Vuitton",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
    ]
  }

  const talents = {
    title: "Meet the Talents",
    subText: "Enjoy unbelievable experience through hidden talented in Africa demonstrated at Creos Geek Out.",
    people: [
      {
        name: "Kathryn Murphy",
        position: "Founder, Louis Vuitton",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Kathryn Murphy",
        position: "Founder, Louis Vuitton",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },
      {
        name: "Kathryn Murphy",
        position: "Founder, Louis Vuitton",
        image: "https://modernlanguages.exeter.ac.uk/includes/images/staff/murphy.jpg"
      },

    ]
  }

  return (
    <>
        <Nav active={4}/>
        <Banner />
        <Expected />
        <People {...specialGuest} actualImages/>
        <People {...hosts}/>
        <People {...talents}/>
        <BottomBanner1 />
        <Socials />
        <Footer />
    </>
  )
}

export default GeekOut