import Layout from "../components/Layout"
import SEO from "../components/SEO"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="Descroption about website" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="hero-img"
            as="section"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
