import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
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
            <form className="form contact-form">
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
      </main>
    </Layout>
  )
}

export default Contact
