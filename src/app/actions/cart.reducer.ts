import { createReducer, on, Action } from "@ngrx/store";
import { addToCart, removeFromCart, clearCart, addProductToCart, changeCartItemCount, increment } from "./cart.actions";
import { Product } from "../models/product";
import { CartItem } from "../models/cart-item";

export const initialState: CartState = {
	cartItems: [] = [],
};
// export const initialState: CartState[] = [];
export interface CartState {
	cartItems: CartItem[];
}

// export const initialState: CartItem[] = [];
export const cartReducer = createReducer(
	initialState,
	on(addToCart, (state, {item}) => ({...state, cartItems: state.cartItems.concat(item)})),
	on(addProductToCart, (state, {product, count}) => {

		let cartItems: CartItem[] = state.cartItems;

		let added: boolean = false;
		for (let i = 0; i < cartItems.length; i++) {
			if (cartItems[i].product.id == product.id) {
				cartItems[i].count += count;
				added = true;
				break;
			}
		}
		
		console.log("Before size: " + cartItems.length);
		if (!added) {
			let cartItem = new CartItem(product, count, product.price * count);
			cartItems = [...cartItems, cartItem];
		}
		console.log("Added to cartItems, now size: " + cartItems.length);

		let _state: CartState = {
			cartItems: [] = cartItems,
		};
		return _state;
	}),
	on(removeFromCart, (state, {product}) => {
		for (let i = 0; i < state.cartItems.length; i++) {
			if (state.cartItems[i].product.id == product.id) {
				state.cartItems.slice(i, 1);
				break;
			}
		}
		return state;
	}),
	on(increment, (state, {item}) => {
		for (let i = 0; i < state.cartItems.length; i++) {
			if (state.cartItems[i].product.id == item.product.id) {
				++state.cartItems[i].count;
				break;
			}
		}
		return state;
	}),
	on(clearCart, (state) => ({...state, cartItems: []})),
	on(changeCartItemCount, (state, {item}) => {
		for (let i = 0; i < state.cartItems.length; i++) {
			if (state.cartItems[i].product.id == item.product.id) {
				if (item.count == 0) {
					state.cartItems.slice(i, 1);
					break;
				}
				state.cartItems[i].count = item.count;
				break;
			}
		}
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