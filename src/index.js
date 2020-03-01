import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App/index.js';
import {Provider} from "react-redux";
import store from "./store/index.js";


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {BrowserRouter,Link} from "react-router-dom";


import Tab1 from "./views/tab1";
import Tab2 from "./views/tab2";
import Tab3 from "./views/tab3";
import Tab4 from "./views/tab4";


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<BrowserRouter>
				<App>
					<Switch>
						<Route path='/' exact component={Tab1}></Route>
						<Route path='/a' component={Tab2}></Route>
						<Route path='/b' component={Tab3}></Route>
						<Route path='/c' component={Tab4}></Route>
					</Switch>
				</App>
			</BrowserRouter>
		</Router>
	</Provider>,
	document.getElementById('root')
);
