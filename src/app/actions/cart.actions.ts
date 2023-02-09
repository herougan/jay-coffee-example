import { createAction, createActionGroup, props } from "@ngrx/store";
import { CartItem } from "../models/cart-item";
import { Product } from "../models/product";

export const addToCart = 			createAction('[Cart Component] AddToCart', 			props<{item: CartItem;}>());
export const addProductToCart =		createAction('[Cart Component] addProductToCart', 	props<{product: Product;}>())
export const removeFromCart = 		createAction('[Cart Component] RemoveFromCart', 	props<{item: CartItem;}>());
export const clearCart = 			createAction('[Cart Component] ClearCart');
export const changeCartItemCount = 	createAction('[Cart Component] ChangeCartItemCount',props<{item: CartItem;}>());

// export const addNumber = 		createAction('[Cart Component] AddNumber');
// export const removeNumber = 	createAction('[Cart Component] RemoveNumber');
// export const clearNumber = 		createAction('[Cart Component] ClearNumber');