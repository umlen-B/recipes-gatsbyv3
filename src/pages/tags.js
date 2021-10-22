import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import { graphql, Link } from "gatsby"

const Tags = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const newTags = setupTags(recipes)
  return (
    <Layout>
      <SEO title="Recipe Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const tagSlug = slugify(text, { lower: true })
            return (
              <Link key={index} to={`/tags/${tagSlug}`} className="tag">
                <h4>{text}</h4>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
