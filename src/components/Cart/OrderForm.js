import React, { useRef } from "react";
import styles from './OrderForm.module.css';

const OrderForm = (props) => {

    const nameInput    = useRef();
    const addressInput = useRef();
    const pinInput     = useRef();
    const phoneInput    = useRef();

    const cartItems = props.cartData.map(item => {return {
        Name     : item.name,
        Quantity : item.amount
    }} );

    const orderItems = [cartItems,props.amount]

    const orderSubmit = (event) => {
        event.preventDefault();
        const name    = nameInput.current.value;
        const address = addressInput.current.value;
        const pin     = pinInput.current.value;
        const phone   = phoneInput.current.value;

        if(name.trim().length === 0 || address.trim().length === 0 || pin.trim().length === 0 || phone.trim().length === 0) {
            alert('Please enter the required fields ');
            return;
        } 

    
        fetch('https://food-order-app-c034a-default-rtdb.asia-southeast1.firebasedatabase.app/orderUsers/user.json',
        {method : 'POST',
         body   : JSON.stringify({UserName    : name,
                                  userAddress : address,
                                  userPin     : pin,
                                  userPhone   : phone,
                                  order       : orderItems
                                    }),
        headers : { 
            'Content-Type' : 'application/json'
                  }
        }).then(response => {
            if(response.ok) 
            props.onPlaceOrder();
        }).catch(err => {
            alert('Failed to place Order..Please check your Internet Connection')
        });
        

    }

    return (
        <div>
        <form className={styles.form}>
                <div className={styles.items}>
                    <label> User Name </label>
                    <input type='text' ref = {nameInput}/>
                </div>
                <div className={styles.items}>
                    <label>Street</label>
                    <input ref = {addressInput}/>
                    
                </div>
                <div className={styles.items}>
                    <label>ZIP</label>
                    <input type='number' ref = {pinInput}/>
                    
                </div>
                <div className={styles.items}>
                    <label>Phone:</label>
                    <input type='number' ref = {phoneInput}/>
                    
                </div>
                </form>
                <div className = {styles.actions}>
                <button className = {styles['cancel-order']} onClick = {props.onCancel} >Cancel Order </button>
                <button className = {styles['place-order']} onClick={orderSubmit}>Place Order</button>
                </div>
                
            </div>
       
    )
}

export default OrderForm;

