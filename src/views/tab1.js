import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		count: state.number
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		increment: (num)=>{
			dispatch({type: 'INCREMENT',payload: num})
		},
		decrement: (num)=>dispatch({type: 'DECREMENT', payload: num}),
	}
}

class Tab1 extends React.Component{
	add = ()=>{
		this.props.increment(2)
	}
	reduce = () => {
		this.props.decrement(0)
	}
	render() {
		return (
			<div>
				<div>记数：{this.props.count}</div>
				<button onClick={this.add}>增加</button>
				<button onClick={this.reduce}>减少</button>
			</div>
		)
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(Tab1)
