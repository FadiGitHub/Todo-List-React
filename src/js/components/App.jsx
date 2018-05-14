import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	addItemAction,
	deleteItemAction,
	changeHandlerAction,
	completeItemAction,
	shiftUpAction,
	shiftDownAction
} from '../actions';
import ListItem from './ListItem';

class App extends Component {
	constructor() {
		super();

		this.changeHandler = this.changeHandler.bind(this);
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.completeItem = this.completeItem.bind(this);
		this.shiftUp = this.shiftUp.bind(this);
		this.shiftDown = this.shiftDown.bind(this);
	}

	changeHandler(e) {
		let { inputValue, changeHandlerAction } = this.props;
		inputValue = e.target.value;
		changeHandlerAction(inputValue);
	}

	addItem(e) {
		let { inputValue, listItems } = this.props;
		e.preventDefault();

		const item = {
			id: Math.random(),
			value: inputValue,
			completed: false
		};
		listItems = listItems.concat(item);
		this.props.addItemAction(listItems);
		this.props.changeHandlerAction('');
	}

	deleteItem(id) {
		let { listItems, deleteItemAction } = this.props;

		listItems = listItems.filter(item => {
			return item.id !== id;
		});

		deleteItemAction(listItems);
	}

	completeItem(index) {
		let { listItems, completeItemAction } = this.props;
		listItems[index].completed = !listItems[index].completed;
		listItems = [...listItems];
		completeItemAction(listItems);
	}

	shiftUp(index) {
		let { listItems, shiftUpAction } = this.props;

		if (index) {
			listItems = [...listItems];
			var temp = listItems.splice(index, 1);
			listItems.splice(index - 1, 0, temp[0]);
		}

		shiftUpAction(listItems);
	}

	shiftDown(index) {
		let { listItems, shiftDownAction } = this.props;

		if (!index) {
			listItems = [...listItems];
			var temp = listItems.splice(index, 1);
			listItems.splice(index + 1, 0, temp[0]);
		} else {
			listItems = [...listItems];
			var temp = listItems.splice(index, 1);
			listItems.splice(index + 1, 0, temp[0]);
		}

		shiftDownAction(listItems);
	}

	render() {
		let { listItems, inputValue } = this.props;
		const listItemComp = listItems.map((item, i) => {
			return (
				<ListItem
					listItems={item}
					key={i}
					index={i}
					deleteItem={this.deleteItem}
					completeItem={this.completeItem}
					shiftUp={this.shiftUp}
					shiftDown={this.shiftDown}
				/>
			);
		});
		return (
			<div className="container app">
				<h1>My Todo List</h1>
				<hr />
				<form>
					<div className="form-group test">
						<label htmlFor="list-item-input"> New Todo Item </label>
						<input
							type="text"
							className="list-item-input"
							placeholder="Enter Todo Item"
							onChange={this.changeHandler}
							value={inputValue}
						/>
					</div>
					<button className="btn btn-default" onClick={this.addItem}>
						Submit
					</button>
				</form>
				<table className="table table-bordered table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Item</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{listItemComp}</tbody>
				</table>
			</div>
		);
	}
}

App.propTypes = {};

function mapStateToProps(state) {
	return {
		inputValue: state.list.inputValue,
		listItems: state.list.listItems
	};
}

export default connect(mapStateToProps, {
	changeHandlerAction,
	addItemAction,
	deleteItemAction,
	completeItemAction,
	shiftUpAction,
	shiftDownAction
})(App);
