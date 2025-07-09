import { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        console.log(item);
        const isExists = cartItems.find(cartItem => cartItem.id === item.id);
        if(isExists){
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            ));
        } else{
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    }

    const calcTotalPrice = () => {
        return cartItems.length != 0 ? cartItems.reduce((acc, item) => acc += (item.price * item.quantity), 0) : 0; 
    }

    const updateCart = (item) => {
        if(item.quantity === 1){
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        } else{
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === item.id ? {...cartItem, quantity:cartItem.quantity - 1} : cartItem
            ));
        }
    }

    return(
        <CartContext.Provider value={{ cartItems, addToCart, calcTotalPrice, updateCart }}>
            {children}
        </CartContext.Provider>
    )
} 