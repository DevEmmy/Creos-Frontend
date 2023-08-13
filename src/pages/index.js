import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import Homepage from '@/components/Homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creos</title>
        <meta name="description" content="The Future Workforce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <Homepage />
    </>
  )
}
