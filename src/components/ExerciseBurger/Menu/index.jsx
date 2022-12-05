import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
	renderTableMenu() {
		let { menu, burger } = this.props.stateBurger;
		return Object.entries(menu).map((item, idx) => {
			let [name, price] = item;
			let amount = burger[name];
			return (
				<tr key={idx}>
					<th>{name}</th>
					<td>
						<button className='btn btn-success me-2'>
							<i className='fa-solid fa-plus'></i>
						</button>
						<span>{amount}</span>
						<button className='btn btn-danger ms-2'>
							<i className='fa-solid fa-minus'></i>
						</button>
					</td>
					<td>{price}</td>
					<td>{amount * price}</td>
				</tr>
			);
		});
	}
	// Caculator price
	calcMoney = () => {
		let { menu, burger } = this.props.stateBurger;
		let sum = Object.entries(menu).reduce((total, item) => {
			let [name, price] = item;
			let amount = Number(burger[name]);
			return (total += amount * Number(price));
		}, 0);
		return sum;
	};
	render() {
		return (
			<div className='menu mt-4'>
				<h4 className='text-success'>Chọn thức ăn </h4>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Thức ăn</th>
							<th scope='col'></th>
							<th scope='col'>Đơn giá</th>
							<th scope='col'>Thành tiền</th>
						</tr>
					</thead>
					<tbody>{this.renderTableMenu()}</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td colSpan={2}>Tổng cộng:</td>
							<td>{this.calcMoney()}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	stateBurger: state.burgerReducer,
});

export default connect(mapStateToProps)(Menu);
