import React from "react";
import styles from './Menu.module.css';
import Card from "../../UI/Card";
import Dish from "./Dish";
import Cart from '../Cart/Cart';

const Menu = (props) => {

    return(
        <Card className = {styles.menu}>
            <ul>
                {props.menu.map( item =>  <li  key = {Math.random()} > <Dish name = {
                    item.name} 
                    desc = {item.description} 
                    price = {item.price} 
                    id = {item.id} 
                    newItem = {props.newItem}
                    /> 
                    </li> )}

            </ul>
        <Cart/>
        </Card>
    )



};

export default Menu;