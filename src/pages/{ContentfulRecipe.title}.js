import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    servings,
    prepTime,
    cookTime,
    description: { description },
    image,
    content: { instructions, ingredients, tags, tools },
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  return (
    <Layout>
      <SEO title={title} />
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              className="about-img"
              alt={title}
            />
            <article className="recipe-info">
              <h4>{title}</h4>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock></BsClock>
                  <h5>Prep Time</h5>
                  <p>{prepTime}min.</p>
                </article>
                <article>
                  <BsClockHistory></BsClockHistory>
                  <h5>Cook Time</h5>
                  <p>{cookTime}min.</p>
                </article>
                <article>
                  <BsPeople></BsPeople>
                  <h5>Serving</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                  const tagSlug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${tagSlug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      servings
      prepTime
      cookTime
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      content {
        instructions
        ingredients
        tags
        tools
      }
    }
  }
`

export default RecipeTemplate
