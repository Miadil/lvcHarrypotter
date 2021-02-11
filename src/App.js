import { Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./screen/Home"
import Characters from "./screen/Characters"
import Spell from "./screen/Spell"
import DetailsCharacter from "./screen/DetailsCharacter"

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/characters" component={Characters} />
				<Route path="/characters/:id" component={DetailsCharacter} />
				<Route path="/spell" component={Spell} />
			</Switch>
		</div>
	)
}

export default App
