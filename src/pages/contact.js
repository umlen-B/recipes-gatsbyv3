import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae non corrupti quas pariatur hic, fugit dignissimos
              deserunt incidunt recusandae voluptatum tempora libero qui
              voluptatem quidem excepturi. Temporibus!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor, impedit similique totam sit hic. Molestias
              numquam vel velit odio, quis dolore! Saepe.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/mpzkejje"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
                <button className="btn block" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </article>
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

export default Contact
