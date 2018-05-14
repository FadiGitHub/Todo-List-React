import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
	constructor() {
		super();
	}

	render() {
		let {
			listItems,
			index,
			deleteItem,
			completeItem,
			shiftUp,
			shiftDown
		} = this.props;
		// console.log(this.props);
		return (
			<tr>
				<td>{index}</td>
				<td className={listItems.completed ? 'completed' : ''}>
					{listItems.value}
				</td>
				<td>
					<button
						className="btn btn-success"
						onClick={() => completeItem(index)}
					>
						Completed
					</button>
					<button
						className="btn btn-primary"
						onClick={() => {
							shiftUp(index);
						}}
					>
						Shift up <span className="glyphicon glyphicon-menu-up" />
					</button>
					<button className="btn btn-primary" onClick={() => shiftDown(index)}>
						Shift down <span className="glyphicon glyphicon-menu-down" />
					</button>
					<button
						className="btn btn-danger"
						onClick={() => deleteItem(listItems.id)}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

ListItem.propTypes = {};

export default ListItem;
