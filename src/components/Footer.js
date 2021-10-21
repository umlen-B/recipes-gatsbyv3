import React from "react"

function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear() + " "}
        <span>Simple Recipes</span> built with{" "}
        <a href="http://gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
