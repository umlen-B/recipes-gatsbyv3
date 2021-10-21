import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              placeat illum ipsum. Quibusdam, reprehenderit possimus tempore
              maxime libero alias inventore?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              vitae earum exercitationem illum, saepe fugit!
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Saltbae"
            placeholder="blurred"
            className="about-img"
            as="picture"
          ></StaticImage>
        </section>
      </main>
    </Layout>
  )
}

export default About
