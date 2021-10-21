import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Image = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="blurred"
          width={200}
          layout="fixed"
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>fullWidth / default</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Image
