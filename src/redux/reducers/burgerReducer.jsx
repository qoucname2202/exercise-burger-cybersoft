const initialState = {
	burger: {
		salad: 1,
		cheese: 2,
		beef: 2,
	},
	menu: {
		salad: 10,
		cheese: 20,
		beef: 55,
	},
};
export const burgerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ORDER_AMOUNT_BURGER': {
			return { ...state };
		}
		default:
			return { ...state };
	}
};
