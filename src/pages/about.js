import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description="this is about page" />
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
        <section className="featured-recipes">
          <h5>Look at this Awesome soup !</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        cookTime
        prepTime
        servings
        title
        content {
          ingredients
          instructions
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default About
