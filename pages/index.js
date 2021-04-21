import Head from 'next/head'
import Link from 'next/link'
import Header from './partials/header'
import Footer from './partials/footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="site">
      <Header />
      <div className={styles.container}>
        <Head>
          <title>htmelvis web design, development and optimization from Pennsylvania</title>
           <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Business growth for e-commerce by design and digital marketing. Transparent search engine marketing with a splash of design and user experience." />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Business growth for e-commerce by design and digital marketing. Transparent search engine marketing with a splash of design and user experience." />
            <meta property="og:url" content="https://htmelvis.com" />
            <meta property="og:title" content="Web design, development and digital marketing expertise from Erie, PA" />
            <meta property="og:image" content="https://htmelvis.com/logo.png" />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:site" content="@htmelvis" />
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css' />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            I'm Ed, An Entrepreneur, Creative, Father, <span style={{color: "#0070f3"}}>&amp;</span> Web Worker.
          </h1>

          <div className={styles.grid}>
            <Link href="/about">
              <a href="#" className={styles.card}>
                <h3>About Me &rarr;</h3>
                <p>All about what kind of stuff I like and where you can find me online.</p>

              </a>
            </Link>
            <Link href="/contact">
              <a href="#" className={styles.card}>
                <h3>Get in touch &rarr;</h3>
                <p>Email me or get in contact with me on my social accounts.</p>
              </a>
            </Link>

            <Link href={"/services"}>
            <a
              href="#"
              className={styles.card}
            >
              <h3>Services & Work &rarr;</h3>
              <p>See what I do and have done in the past. </p>
            </a>
            </Link>
            <a
              href="#"
              className={styles.cardno}
            >
              <h3>Writing (Disabled) &rarr;</h3>
              <p>
                New content coming soon.
              </p>
            </a>
          </div>
        </main>


    </div>
      <Footer />
    </div>
  )
}
