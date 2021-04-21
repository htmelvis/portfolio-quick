import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/About.module.css'
import Header from './partials/header'
import Footer from './partials/footer'

export default function Contact() {
  return (
    <div className="site">
      <Header />

      <div className={styles.container}>
        <Head>
          <title>Contact Ed, htmelvis Digital Marketing and Web Development</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Business growth for e-commerce by design and digital marketing. Transparent search engine marketing with a splash of design and user experience."/>
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
            Email me to get in touch @ <br/>
            ed [at] <i>htmelvis.com</i></h1>
        </main>
        <section className="contact page-container">
          <div className="container">
            <p style={{fontSize: '2rem', marginTop: '2em', padding: '7em', textAlign: 'center'}}>I am currently looking for new opportunities in the identity, cryptocurrency and financial industries. </p>

          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
