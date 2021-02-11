import React from "react"
import { Link } from "react-router-dom"
import "./DisplayCharacter.css"
const DisplayCharacter = ({ id, image, name }) => {
	return (
		<Link to={`/characters/${id}`}>
			<div className="globalCard">
				<img src={image} alt={name} />
				<div className="name">{name}</div>
			</div>
		</Link>
	)
}

export default DisplayCharacter
