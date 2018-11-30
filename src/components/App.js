import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './Admin/index'
import Jobs from './Jobs/index'

const App = () =>
	<Router>
		<Switch>
			<Route exact path='/' component={Jobs} />
			<Route path='/admin' component={Admin} />
		</Switch>
	</Router>

export default App