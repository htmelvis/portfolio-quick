import Head from 'next/head'
import Link from 'next/link'
import Header from './partials/header'
import Footer from './partials/footer'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={"site"}>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>All About Ed, and htmelvis</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Design, Development, <span>&amp;</span> Digital Marketing
          </h1>
          <section className={styles.container}>
            <p className="center">I like to make sites stickier, look better, & run faster.<i> Fair warning content is out of date. Updates coming soon! (4/2021)</i></p>
            <div className="body-content">

              <br />
              <p>Find me here:</p>
              <ul>
                <li><a href="https://www.twitter.com/htmelvis">@htmelvis</a></li>
                <li><a href="https://www.github.com/htmelvis">Github</a></li>
                <li><a href="https://www.linkedin.com/in/edwardwieczorek">LinkedIn</a></li>
              </ul>
              <h2>Run Faster. Rank Higher. Operate easier.</h2>
              <p>My websites run faster, rank higher in search engines and are overall easier to use. Get in touch with me to see if I can help you.</p>

              <p>Started out designer currently an Internet Consultant, Front End Dev, Web Worker, Father, and Husband. I enjoy writing HTML, CSS, and Javascript. I am currently working as a E-Commerce Specialist/Lead Web Developer for a large manufacturer. I focus on e-commerce, search engine optimization and web application development.</p>

              <p>Clean, simple, customer-tested User Interfaces are some of my favorite things. I jump at the opportunity to work on interesting, ambitious projects.</p>

              <p>I'm always trying to learn new things and expand my skills. I still play music, ride BMX bikes, and enjoy spending as much time as I can with my wonderful young family.</p>

              <Link href='/services'><span className="bold blue">Check out my work here &rarr;</span></Link>
            </div>
          </section>
        </main>


        <Footer />
      </div>
    </div>
  )
}
