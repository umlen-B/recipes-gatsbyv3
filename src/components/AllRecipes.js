import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        cookTime
        prepTime
        servings
        title
        content {
          ingredients
          instructions
          tags
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes}></TagsList>
      <RecipesList recipes={recipes}></RecipesList>
    </section>
  )
}

export default AllRecipes
