import React from 'react';
import classes from './CartItem.module.css';

const CartItem = props => {

    const price = `$${props.price.toFixed(2)}`;

    

    return(
            <div className = {classes.item}>
            <div> 
            <div className={classes.name}>{props.name} </div>
            <div className={classes.data}>
            <div className = {classes.price}>{price}</div>
            <div className={classes.amount}> x {props.amount} </div>
            </div>
            </div>
            <button className={classes.button1} id = {props.name} onClick = {props.reduce}> - </button>
            <button className={classes.button2}  id = {props.name} onClick = {props.add}> + </button>
            </div>
    )

}

export default CartItem;