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
