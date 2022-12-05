import React, { Component } from 'react';
import { connect } from 'react-redux';

class Burger extends Component {
	renderBurgerItem = () => {
		let { burger } = this.props.stateBurger;
		return Object.entries(burger).map(item => {
			let [key, value] = item;
			let itemBread = [];
			for (let i = 0; i < value; i++) {
				itemBread.push(<div key={i} className={key}></div>);
			}
			return itemBread;
		});
	};
	render() {
		return (
			<div className='burger mt-4'>
				<h4 className='text-danger'>Bánh burger của bạn</h4>
				<div className='breadTop'></div>
				{this.renderBurgerItem()}
				<div className='breadBottom'></div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	stateBurger: state.burgerReducer,
});

export default connect(mapStateToProps)(Burger);
