import {
	ADD_ITEM,
	DELETE_ITEM,
	CHANGE_VALUE,
	COMPLETE_ITEM,
	SHIFT_UP,
	SHIFT_DOWN
} from '../constants';

export function changeHandlerAction(inputValue) {
	return {
		type: CHANGE_VALUE,
		payload: inputValue
	};
}
export function addItemAction(listItems) {
	return {
		type: ADD_ITEM,
		payload: listItems
	};
}
export function deleteItemAction(listItems) {
	return {
		type: DELETE_ITEM,
		payload: listItems
	};
}
export function completeItemAction(listItems) {
	return {
		type: COMPLETE_ITEM,
		payload: listItems
	};
}
export function shiftUpAction(listItems) {
	return {
		type: SHIFT_UP,
		payload: listItems
	};
}
export function shiftDownAction(listItems) {
	return {
		type: SHIFT_DOWN,
		payload: listItems
	};
}
