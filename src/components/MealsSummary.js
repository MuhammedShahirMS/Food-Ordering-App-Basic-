import React from "react";
import styles from './MealsSummary.module.css';

const MealsSummary = () => {

    return (
        <div className={styles.summary}>
        <h2> Delicious Food, Delivered to You </h2>
        
        <br/>Choose your favorite Meal from our available list of meals and enjoy a delicious
        lunch or dinner at home. <br/><br/>
        All our meals are cooked with high-quality ingredients, just-in-time and of course
        by experienced chefs!
        
        </div>
    )

};

export default MealsSummary;