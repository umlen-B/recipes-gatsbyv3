import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { eq: "recipes" } }
      sort: { fields: name, order: ASC }
    ) {
      totalCount
      nodes {
        name
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200)
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((ele, index) => {
        const image = getImage(ele)
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={image}
              alt={ele.name}
              className="gallery-img"
            ></GatsbyImage>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 1rem 1rem 0 0;
  }
  .gallery-img {
    border-radius: 1rem;
    height: 200px;
  }
`
export default Gallery
