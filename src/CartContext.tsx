import React, {useReducer, useContext} from 'react';
import cartReducer from './cartReducer';

export const CartContext = React.createContext({} as {cart: any, dispatch: any});

const initialCart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');

export function CartProvider(props: any) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return(
    <CartContext.Provider value = {{cart, dispatch}}>
      {props.children}
    </CartContext.Provider>
    ) 
}

// create custom hook for consuming cart 
export function useCart(){
  return useContext(CartContext);
}