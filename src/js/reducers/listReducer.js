import {
	ADD_ITEM,
	DELETE_ITEM,
	CHANGE_VALUE,
	COMPLETE_ITEM,
	SHIFT_UP,
	SHIFT_DOWN
} from '../constants';

const initial = {
	inputValue: '',
	listItems: []
};

export default function(state = initial, action) {
	switch (action.type) {
		case CHANGE_VALUE:
			return { ...state, inputValue: action.payload };
		case ADD_ITEM:
			return { ...state, listItems: action.payload };
		case DELETE_ITEM:
			return { ...state, listItems: action.payload };
		case COMPLETE_ITEM:
			return { ...state, listItems: action.payload };
		case SHIFT_UP:
			return { ...state, listItems: action.payload };
		case SHIFT_DOWN:
			return { ...state, listItems: action.payload };
	}
	return state;
}
