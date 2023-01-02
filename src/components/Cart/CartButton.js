import { useContext, useEffect, useState } from "react";
import CartIcon from "../../UI/CartIcon";
import AuthContext from "../context/context-Item";
import styles from './CartButton.module.css';

const CartButton = () => {

const ctx = useContext(AuthContext);

const totalnoOfItems = ctx.cart.reduce((currSum, item) => {
        return currSum + item.amount;
}, 0);

const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false); // for highlighting/bumping cart button while no. changes

let buttonStyle = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`;

useEffect(() => {
   if(totalnoOfItems === 0)   
   return;

   setButtonIsHighlighted(true);
   const timer = setTimeout(() => {
        setButtonIsHighlighted(false);
   }, 300);

   return () => {
        clearTimeout(timer);
   }
}, [totalnoOfItems]); 

const onShowCart = (event) => {                   // for hiding and showing cart on button click
ctx.onCartClick(event);
}

return(
 <button className = {buttonStyle} onClick = {onShowCart}> 
 <CartIcon/>
 <span className = {styles.label}> Your Cart </span> 
 <span className = {styles.count}> {totalnoOfItems} </span>
 </button>
 );
    }

export default CartButton;