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
              <title>What does htmelvis do? Services and Past Work - Web Development, Optimization and Marketing</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
              <h1 className={styles.title}>
                Faster Sites, Higher Rankings, <span>&amp;</span> Happier Customers.
              </h1>
              <section className={styles.container}>
                <p className="center">I like to make sites stickier, look better, & run faster.<i> Fair warning content is out of date. Updates coming soon! (4/2021)</i></p>
                <div className="body-content">

                    <section className="services page-container">
                      <div className="service container">
                        <article>
                          <header>
                            <h1>What Do I Do?</h1>
                            <h4>I generate more traffic, engage users, and sell products. </h4>
                            <p><i className="label-danger alert-danger display-block">A lot has changed for me. Content out of date.
                              New info coming soon (4/2021)</i></p>
                          </header>
                          <p>In the past few years I've had the pleasure of work on projects with some of the best in all industries
                            including: BrandMedia Technologies, US Netting, Associated Clinical Labs, St. Vincent Hospital, Voodoo
                            Brewery, Beaumont Technologies, Welder's Supply, RJ Corman Railpower, The Uganda Project, Atlas & Mason,
                            ASTA-USA, Kelly Bros, Solenoid Solutions, Knox Computer Solutions, TM Filtration, and many more.</p>
                          <p>I've enjoyed an enriched journey because of the aforementioned companies. I find it of great pleasure to
                            learn about new industries and explore ways to ignite their presence.</p>
                          <h3>Ways that I do this: (<a href="#portfolio">See some portfolio projects below</a>)</h3>
                          <ul>
                            <li>Web Performance Optimization</li>
                            <li>SEO - Digital Search Marketing</li>
                            <li>Web Application Branding and Re Design</li>
                            <li>Web Growth Opportunity Consultations</li>
                            <li>UI/UX Design</li>
                            <li>Web Development</li>
                          </ul>
                        </article>
                        <div className="" id="portfolio">

                        </div>
                      </div>
                    </section>

                  </div>
                <div className="portfolio-item">
                  <img src="/port1.png" alt="featured work" />
                </div><div className="portfolio-item">
                  <img src="/port2.png" alt="featured work" />
                </div><div className="portfolio-item">
                  <img src="/port3.png" alt="featured work" />
                </div><div className="portfolio-item">
                  <img src="/port4.png" alt="featured work" />
                </div>
              </section>
            </main>


            <Footer />
          </div>
        </div>
      )
    }
