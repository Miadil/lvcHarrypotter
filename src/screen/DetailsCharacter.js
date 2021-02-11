import axios from "axios"
import React, { Component } from "react"
import { Link } from "react-router-dom"

class DetailsCharacter extends Component {
	state = {
		character: [],
	}
	componentDidMount() {
		axios
			.get(
				`https://harrypotterapi20.herokuapp.com/characters/${this.props.match.params.id}`
			)
			.then((res) => this.setState({ character: res.data[0] }))
	}
	render() {
		console.log("details :", this.props.match.params)
		const { character } = this.state
		return (
			<div>
				<p>{character.name}</p>
				<img src={character.image} alt={character.name} />
				<p>Maison: {character.house}</p>
				<p>species: {character.species}</p>
				<p>gender: {character.gender}</p>
				<p>ancestry: {character.ancestry}</p>
				<p>eyeColour: {character.eyeColour}</p>
				<p>dateOfBirth: {character.dateOfBirth}</p>
				<Link to="/characters"> Return Characters</Link>
			</div>
		)
	}
}

export default DetailsCharacter
