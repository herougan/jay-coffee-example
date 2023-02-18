import { createReducer, on, Action } from "@ngrx/store";
import { addToCart, removeFromCart, clearCart, addProductToCart, changeCartItemCount, initCart } from "./cart.actions";
import { Product } from "../models/product";
import { CartItem } from "../models/cart-item";

export const initialState: CartState = {
	cartItems: [],
};
export interface CartState {
	cartItems: CartItem[];
}

// export const initialState: CartItem[] = [];
export const cartReducer = createReducer(
	initialState,
	on(addToCart, (state, {item}) => ({...state, cartItems: state.cartItems.concat(item)})),
	on(addProductToCart, (state, {count, product}) => {
		if (!Number.isInteger(count)) return state;

		let index: number = state.cartItems.findIndex(obj => {
		  return obj.product.id === product.id;
		});
		
		// Edit item
		if (index !== -1) {
			return Object.assign({},
				state,	
				{
					cartItems:  [...state.cartItems.slice(0, index), 
						new CartItem(product, state.cartItems[index].count + count),
					...state.cartItems.slice(index + 1)],
					// Object.assign({}, 
					// 	...state.cartItems,
					// 	{
					// 		[index]: new CartItem(product, state.cartItems[index].count + count),
					// 	},
					// )
				}
			);
		}

		// New item
		index = state.cartItems.length;
		return Object.assign({}, 
			state,
			{
				cartItems:  [...state.cartItems, new CartItem(product, count),],
			}				
		);
	}),
	on(removeFromCart, (state, {item}) => {

		const index: number = state.cartItems.findIndex(obj => {
		  return obj.product.id === item.product.id;
		});

		// test
		let tryout = Object.assign({}, 
			state,
			{
				cartItems:  [...state.cartItems.slice(0, index), 
					// new CartItem(state.cartItems[index].product, state.cartItems[index].count - 1),
					 ...state.cartItems.slice(index + 1)],
			}				
		);
		console.log(state);
		console.log(tryout);
		
		return Object.assign({}, 
			state,
			{
				cartItems:  [...state.cartItems.slice(0, index), 
					// new CartItem(state.cartItems[index].product, state.cartItems[index].count - 1),
					 ...state.cartItems.slice(index + 1)],
			}				
		);
	}),
	on(clearCart, (state) => ({...state, cartItems: []})),
	on(changeCartItemCount, (state, {item}) => {

		const index: number = state.cartItems.findIndex(obj => {
		  return obj.product.id === item.product.id;
		});
		
		return Object.assign({}, 
			state,
			{
				cartItems:  [...state.cartItems.slice(0, index), 
					new CartItem(item.product, item.count),
					 ...state.cartItems.slice(index + 1)],
			}				
		);
	}),
	// Init
	on(initCart, (state, {items}) => {
		return Object.assign({},
			state, 
			{
				cartItems: [...state.cartItems, ...items],
			}
		);
	}),
);