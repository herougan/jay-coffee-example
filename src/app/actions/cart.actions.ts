import { createAction } from "@ngrx/store";

export const addToCart = createAction('[Cart Component] AddToCart');
export const removeFromCart = createAction('[Cart Component] RemovFromCart');
export const clearCart = createAction('[Cart Component] ClearCart');