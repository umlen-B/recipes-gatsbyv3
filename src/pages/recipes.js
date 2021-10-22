import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import AllRecipes from "../components/AllRecipes"

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipe List" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
