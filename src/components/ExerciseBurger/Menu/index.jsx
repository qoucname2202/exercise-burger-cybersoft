import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
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
					<tbody>
						<tr>
							<th>salad</th>
							<td>
								<button className='btn btn-success me-2'>
									<i className='fa-solid fa-plus'></i>
								</button>
								<span>4</span>
								<button className='btn btn-danger ms-2'>
									<i className='fa-solid fa-minus'></i>
								</button>
							</td>
							<td>10</td>
							<td>40</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td colSpan={2}>Tổng cộng:</td>
							<td>190</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Menu);
