import React, { useRef } from "react";
import styles from './Dish.module.css';

const Dish = props => {

    const quantityRef = useRef();
    const selected = (event) => {
        const amount    = quantityRef.current.value;
        const id = props.id;
        props.newItem(amount,id) ;
    };

    const price = `$${props.price.toFixed(2)}`;


    

    return(
        <div className = {styles.container}>
            <div className={styles.item} >  <h1> {props.name} </h1>
            <div className = {styles.description}>  {props.desc} </div>
            <div className={styles.price}> {price} </div>
            </div>
            <form className = {styles.form}> 
                <label> Amount </label>
                <input min='1' type='number' max = '5' defaultValue = '1' step='1' ref = {quantityRef} /> 
                <br/>
                <button type = 'button' onClick={selected} > +Add </button>
                </form>
        </div>

    );

};

export default Dish;