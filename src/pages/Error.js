import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! I don't even know where you are!</h1>
        <p>Something went terribly wrong :(</p>
        <Link className="btn btn-primary" to="/">
          Go back to Home
        </Link>
      </div>
    </section>
  )
}

export default Error
