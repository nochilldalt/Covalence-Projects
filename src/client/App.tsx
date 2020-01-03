import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details';
import Add from './pages/Add';

const Template: React.FC<TemplateProps> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/details/:id' component={Details} />
				<Route exact path= '/add' component={Add} />
			</Switch>
		</BrowserRouter>
	)
}

interface TemplateProps { }

export default Template