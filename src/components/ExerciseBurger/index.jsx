import React, { Component } from 'react';
import { connect } from 'react-redux';
import Burger from './Burger';
import Menu from './Menu';

class BurgerExercise extends Component {
	render() {
		return (
			<div className='container'>
				<h1 className='text-center text-success'>Bài tập burger cybersoft</h1>
				<div className='row text-center'>
					<div className='col-6'>
						<Burger />
					</div>
					<div className='col-6'>
						<Menu />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(BurgerExercise);
