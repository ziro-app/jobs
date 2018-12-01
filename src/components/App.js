import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Jobs from './Jobs/index'

const App = () =>
	<Router>
		<Switch>
			<Route exact path='/' component={Jobs} />
		</Switch>
	</Router>

export default App