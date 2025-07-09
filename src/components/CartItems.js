import React from "react";
import { useCart } from "../context/CartContext";

export default function CartItems() {
    const { cartItems, calcTotalPrice, updateCart, addToCart } = useCart();
    
    // console.log(ca)
    return (
        <div>
            <h3 className="text-start mb-3">Cart</h3>
            <table className="table">
                <tbody>
                    {cartItems && cartItems.map(cartItem => (
                        <tr key={cartItem.id}>
                            <td >
                                <img
                                    src={cartItem.image}
                                    className="img-fluid rounded"
                                    style={{ width: '60px', height: '60px', display: 'block', margin: 0, padding: 0, verticalAlign: 'middle' }}
                                    alt={cartItem.title}
                                />

                            </td>
                            <td>{cartItem.title}</td>
                            <td>Price ${cartItem.price}</td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <button className="btn btn-sm btn-primary" onClick={() => updateCart(cartItem)}>-</button>
                                    <span>{cartItem.quantity}</span>
                                    <button className="btn btn-sm btn-primary" onClick={() => addToCart(cartItem)}>+</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4 className="text-start">Total: ${calcTotalPrice()}</h4>
        </div>
    )
}