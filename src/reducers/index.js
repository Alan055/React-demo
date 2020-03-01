const initialState = {
	number: 3
}

const incrementReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			state.number++
			return {...state}
		}
		case 'DECREMENT': {
			state.number--
			return {...state}
		}
		default:
			return state
	}
}

export default incrementReducer
