import React, { useState, Children }from "react";
import {BrowserRouter, NavLink, Link} from "react-router-dom";
import "./index.less";

function App(props) {
	return (
		<div className='appBox'>
			App 容器
			<br/>
			<Link to='/'>tab1</Link><br/>
			<Link to='/a'>tab2</Link><br/>
			<Link to='/b'>tab3</Link><br/>
			<Link to='/c'>tab4</Link><br/>
			<hr/>
			{props.children}
		</div>
	)
}



export default App
