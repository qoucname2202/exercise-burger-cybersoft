const initialState = {
	burger: {
		salad: 0,
		cheese: 0,
		beef: 0,
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
			let { name, amount } = action.payload;
			let newState = { ...state };
			let burgerClone = { ...newState.burger };
			if (amount === -1 && state.burger[name] < 1) {
				return { ...state };
			}
			burgerClone[name] += amount;
			newState.burger = burgerClone;
			return { ...newState };
		}
		default:
			return { ...state };
	}
};
