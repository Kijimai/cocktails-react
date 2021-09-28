import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <footer className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary">
          Details
        </Link>
      </footer>
    </article>
  )
}

export default Cocktail
