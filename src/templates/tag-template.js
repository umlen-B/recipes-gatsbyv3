import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import RecipesList from "../components/RecipesList"
import { graphql } from "gatsby"

const TagTemplate = ({ data, pageContext: { tag } }) => {
  // const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  const titleCase = str => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(" ")
  }
  return (
    <Layout>
      <SEO title={titleCase(tag)} />
      <main className="page">
        <h2>{tag}</h2>
        <section className="tag-recipes">
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getTagRecipes($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        id
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

export default TagTemplate
