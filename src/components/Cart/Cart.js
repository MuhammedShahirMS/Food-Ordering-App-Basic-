import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import AuthContext from "../context/context-Item";
import OrderForm from './OrderForm';
import styles from './Cart.module.css';
import CartItem from './CartItem';



const Cart = () => {

const [render, setRender] = useState();         // // State for displaying address section on ordering conditionally

const ctx = useContext(AuthContext);
const emptyCart = (ctx.cart.length === 0);


const total = ctx.cart.reduce((currSum,item) => {
    return currSum + item.amount * item.price;
},0);

const totalAmount = `$${total.toFixed(2)}`;

const reduceQty = (event) => {
    ctx.reduceAmount(event.target.getAttribute('id'));
}

const addQty = (event) => {
    ctx.addAmount(event.target.getAttribute('id'));
}


const orderHandler = () => {    
    if (!render) {
        setRender(1);  
        return;  
    }                                   // for displaying address section on ordering conditionally
    else {
        setRender(2);
    }
}

const cancelOrderHandler = () => {  // for hiding cart modal, emptying cart and replacing Address form with default
    ctx.onCartClick();              // to prevent Address form being displayed on clicking Cart button.
    ctx.updateCart('clear');
    setRender(0);   
}


const Backdrop = () => {
    return(<div className={styles.backdrop} >
    </div>
    );
}

const CartModal = () => {
    
    if (!render)   
    return(
        <div className={styles.modal}>
        {emptyCart && <h2> 
        Empty Cart.. add Items ? </h2>
        }

        {ctx.cart.map(item => <li key={Math.random()}> 
        <CartItem 
            name   = {item.name} 
            price  = {item.price} 
            amount = {item.amount}
            reduce = {reduceQty}
            add    = {addQty} /> 
            </li> )}

        <div className={styles.summary}>
          <h3>Total Amount </h3>
          <div className={styles.price}> {totalAmount} </div>
          </div>
          <div className={styles.actions}>
          <button onClick={ctx.onCartClick} className={styles.close}> Close </button>
          { !emptyCart && <button onClick={orderHandler} className = {styles.order}> Order </button>}
          </div>
          </div>
    
);

else if (render === 1) return(
    <div className={styles.modal}>
    <div className={styles.summary}>
        <OrderForm cartData = {ctx.cart} 
                    amount = {totalAmount} 
                    onCancel = {cancelOrderHandler}
                    onPlaceOrder = {orderHandler}/>
        </div>
    </div>
)

else return (
    <div className={styles.modal}>
    <div className={styles.summary}>
    <h1 className={styles.thank}> Thank You.. Order Placed </h1>
    <button className = {styles.refreshButton}  onClick = {cancelOrderHandler} > Go back </button>
    </div>
    </div>
)


}


if(ctx.isCartDisplayed) 
    
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('root-backdrop'))}
            {ReactDOM.createPortal(<CartModal />, document.getElementById('root-overlay'))}

        </React.Fragment>



    )



};

export default Cart;