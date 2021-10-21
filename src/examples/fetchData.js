import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
          title
          simpleData
          description
          author
          complexData {
            name
            age
          }
          person {
            name
            age
          }
        }
      }
    }
  `)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h1>{data.site.info.person.name}</h1>
      {data.site.info.complexData.map((ele, index) => {
        return (
          <p key={index}>
            {ele.name} : {ele.age}
          </p>
        )
      })}
    </div>
  )
}

export default ComponentName
