import React, { Component } from 'react';
import { connect } from 'react-redux';

class Burger extends Component {
	render() {
		return (
			<div className='burger mt-4'>
				<h4 className='text-danger'>Bánh burger của bạn</h4>
				<div className='breadTop'></div>
				{/* Salad */}
				<div className='salad'></div>
				{/* Cheese */}
				<div className='cheese'></div>
				{/* Beef */}
				<div className='beef'></div>
				<div className='breadBottom'></div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Burger);
