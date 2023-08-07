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
        name: "Daniel Lumiere",
        position: "Founder, Creos XYZ Group",
        image: "/daniel.JPG"
      },
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
      {
        name: "Olatuni B. Alonge",
        position: "Business Coach",
        image: "/olatunji.JPG"
      },
      {
        name: "Nkasiobi Chukwu",
        position: "Creator of Africa's first AI powered music album",
        image: "/chukwu.jpg"
      }
    ]
  }

  const hosts = {
    title: "Creators Journey",
    // subText: "One of them is hot cake and the second is a daily breakfast server! Don’t miss the party!!!",
    people: [
      {
        name: "Inneh Joseph",
        position: "Affiliate Marketing Expert",
        image: "/inneh.jpg"
      },
      {
        name: "Emmanuel Ovuo",
        position: "Forex Specialist",
        image: "/ovuo.JPG"
      }
    ]
  }

  const talents = {
    title: "Live Performing",
    subText: "Enjoy unbelievable experience through hidden talented in Africa demonstrated at Creos Geek Out.",
    people: [
      {
        name: "Oluwaseun Adeojo",
        position: "Visual Artist",
        image: "seun.JPG"
      },
      {
        name: "Vocamonix",
        position: "Music Live Performance",
        image: "vocamonix.jpg"
      },
    ]
  }

  const influencers = {
    title: "Creos Geek Out Influencers of the year",
    people: [
      {
        name: "Loveth Ogbene",
        position: "Creos Geek Out Female Influencer of the year",
        image: "/loveth.jpg"
      },
      {
        name: "Nachristo",
        position: "Creos Geek Out Male Influencer of the year",
        image: "/nachristo.jpg"
      }
    ]
  }

  return (
    <>
        <Nav active={4}/>
        <Banner />
        <Expected />
        <People {...specialGuest} actualImages/>
        <People {...influencers} actualImages/>
        <People {...talents} actualImages/>
        <People {...hosts} actualImages/>
        <BottomBanner1 />
        <Socials />
        <Footer />
    </>
  )
}

export default GeekOut