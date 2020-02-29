import React from "react";

import {connect} from "react-redux";
// import incrementReducer from "../reducers";

import {increment} from "./../actions/index";

const mapStateToProps = (state) => {
	return {
		count: state.count
	}
}

const mapDispatchToProps = {increment}

class Count extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<div>
					<button>计数器</button>
				</div>
		)
	}
}


// const store  = createStore(incrementReducer)

export default connect(mapStateToProps, mapDispatchToProps)(Count)

