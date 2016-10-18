const likeReducer = (state = {
	results: 0,
	lastValues: []
}, action) => {
	switch (action.type) {
		case "LIKE":
			state = {
				...state,
				results: state.results+action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
		case "DISLIKE":
			state = {
				...state,
				results: state.results - action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
	}
	return state;
};

export default likeReducer;