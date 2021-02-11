import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import "./Header.css"
class Header extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<NavLink exact to="/" className="nav" activeClassName="selected">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/characters"
							className="nav"
							activeClassName="selected"
						>
							Characters
						</NavLink>
					</li>
					<li>
						<NavLink to="/spell" className="nav" activeClassName="selected">
							Spell
						</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}

export default Header
