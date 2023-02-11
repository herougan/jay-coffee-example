import { createReducer, on, Action } from "@ngrx/store";
import { addToCart, removeFromCart, clearCart, addProductToCart, changeCartItemCount } from "./cart.actions";
import { Product } from "../models/product";
import { CartItem } from "../models/cart-item";

export const initialState: State = {
	cartItems: [],
};
export interface State {
	cartItems: CartItem[];
}

// export const initialState: CartItem[] = [];
export const cartReducer = createReducer(
	initialState,
	on(addToCart, (state, {item}) => ({...state, cartItems: state.cartItems.concat(item)})),
	on(addProductToCart, (state, {product}) => {
		// let added: boolean = false;
		// for (let i = 0; i < state.cartItems.length; i++) {
		// 	if (state.cartItems[i].product.id == product.id) {
		// 		++state.cartItems[i].count;
		// 		added = true;
		// 		break;
		// 	}
		// }

		// if (!added) {
		// 	state.cartItems.push(new CartItem(product, 1, product.price));
		// }
		// // return Object.assign({}, state, {});
		return state;
	}),
	on(removeFromCart, (state, {item}) => {
		// for (let i = 0; i < state.cartItems.length; i++) {
		// 	if (state.cartItems[i].product.id == item.product.id) {
		// 		// --state.cartItems[i].count;
		// 		// if (state.cartItems[i].count <= 0) {
		// 		// 	state.cartItems.slice(i, 1);
		// 		// 	break;
		// 		// }
		// 		state.cartItems.slice(i, 1);
		// 		break;
		// 	}
		// }
		return state;
	}),
	on(clearCart, (state) => ({...state, cartItems: []})),
	on(changeCartItemCount, (state, {item}) => {
		// for (let i = 0; i < state.cartItems.length; i++) {
		// 	if (state.cartItems[i].product.id == item.product.id) {
		// 		if (item.count == 0) {
		// 			state.cartItems.slice(i, 1);
		// 			break;
		// 		}
		// 		state.cartItems[i].count = item.count;
		// 		break;
		// 	}
		// }
		return state;
	}),
	//
	//
	//
	// on(addNumber, (state) => {
	// 	return state + 1;
	// }),
	// on(removeNumber, (state) => {
	// 	return state - 1;
	// }),
	// on(clearNumber, (state) => 0),
);