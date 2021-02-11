import React, { Component } from "react"
import axios from "axios"
import DisplayCharacter from "../components/DisplayCharacter"

import "./Characters.css"
class Characters extends Component {
	state = {
		characters: [],
	}
	componentDidMount() {
		axios
			.get("https://harrypotterapi20.herokuapp.com/characters")
			.then((res) => this.setState({ characters: res.data }))
	}
	render() {
		const { characters } = this.state
		return (
			<div className="globalCharacter">
				{characters.map((character) => (
					<DisplayCharacter {...character} key={character.id} />
				))}
			</div>
		)
	}
}

export default Characters
