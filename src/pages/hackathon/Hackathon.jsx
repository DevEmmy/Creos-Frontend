import Nav from '@/components/Nav'
import React from 'react'
import Banner from './Banner'
import What from './What'
import Footer from '@/components/Footer'
import Technologoes from './Technologoes'
import Socials from '@/components/Socials'
import People from '@/components/People'
import Prizes from './Prizes'
import HowToRegister from './HowToRegister'
import WhyCreosHackathon from './WhyCreosHackathon'

const Hackathon = () => {
  const judges = {
    title: "Meet our Judges",
    // subText: "One of them is hot cake and the second is a daily breakfast server! Don’t miss the party!!!",
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

  const mentors = {
    title: "Meet our Mentors",
    // subText: "One of them is hot cake and the second is a daily breakfast server! Don’t miss the party!!!",
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
        <Nav active={3}/>
        <Banner />
        <What />
        <Technologoes />
        <Prizes />
        <HowToRegister />
        <People {...judges}/>
        <People {...mentors} />
        <WhyCreosHackathon />
        <Socials />
        <Footer />
    </>
  )
}

export default Hackathon