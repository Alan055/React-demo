import React from "react";
import {BrowserRouter, NavLink, Link} from "react-router-dom";



class App extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
				<div>
					App 容器
					<br/>
					<BrowserRouter>
						<Link to='/' >tab1</Link><br/>
						<Link to='/a/'>tab2</Link><br/>
						<Link to='/b/'>tab3</Link><br/>
						<Link to='/c/'>tab4</Link><br/>
					</BrowserRouter>
					<hr/>
					{this.props.children}
				</div>
		);
	}

}

export default App
