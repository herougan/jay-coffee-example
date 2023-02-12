import { createReducer, on, Action } from "@ngrx/store";
import { addToCart, removeFromCart, clearCart, addProductToCart, changeCartItemCount } from "./cart.actions";
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

		let index = state.cartItems.findIndex(obj => {
		  return obj.product.id === product.id;
		});

		console.log("Adding " + count + " item(s): " + state.cartItems + "; at index " + index);
		
		// Edit item
		if (index !== -1) {
			return Object.assign({},
				state,	
				{
					cartItems: Object.assign({}, 
						...state.cartItems,
						{
							[index]: new CartItem(product, state.cartItems[index].count + count),
						},
					)
				}
			);
		}

		// test
		let tryout = Object.assign({}, 
			state,
			{
				cartItems:  [...state.cartItems, new CartItem(product, count),],
			}				
		);
		console.log(state);
		console.log(tryout);
		// let tryout2 = Object.assign({},
		// 	state,	
		// 	{
		// 		cartItems: Object.assign({}, 
		// 			...state.cartItems,
		// 			{
		// 				[0]: new CartItem(product, 1),
		// 			},
		// 		)
		// 	}
		// );
		// console.log(tryout2);

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

		const index = state.cartItems.findIndex(obj => {
		  return obj.product.id === item.product.id;
		});
		
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
);