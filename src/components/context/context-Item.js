import React, { useState } from "react";


const AuthContext = React.createContext({
updateCart : (data) => {},
onCartClick : (event) => {},
isCartDisplayed: false,
cart : [],
reduceAmount: (id) => {},
addAmount : (index) => {},
status : false 
}
);

export const AuthContextProvider = (props) => {


const [cart, setNewCart] = useState([]);
const [isCartDisplayed, setIsCartDisplayed] = useState(false);
const [status, setStatus] = useState(false);        // 'status' state is used to rerender the Cart Button as this component does not seem to rerender
                                                    // with a state change of something other than boolean (ie. status is boolean)
    
const onCartClick = (event) => {
    setIsCartDisplayed(!isCartDisplayed);
}


const updateCart = (newItem) => {
let tempCart = cart;
if(newItem === 'clear') {
    setNewCart([]);
    return;
}
let counter = 0;
for(let item of tempCart){
    if (newItem.name === item.name) {
        item.amount += newItem.amount;
        if(item.amount >5) {
            alert('Maximum quantity of 5 for this item');
            item.amount = 5;
        }
        counter += 1;
    }
}
if(counter >0)  { 
    setNewCart(tempCart);
    setStatus(!status);
}
else {
    setNewCart([newItem, ...tempCart])
}};


const reduceAmount = id => {
    const index = cart.findIndex(item => item.name === id );
    const tempCart = cart;
    tempCart[index].amount -= 1;
    if(tempCart[index].amount <= 0){
       tempCart.splice(index,1);
    }
    setNewCart(tempCart);
    setStatus(!status);

}

const addAmount = id => {
    const index = cart.findIndex(item => item.name === id );
    const tempCart = cart;
    tempCart[index].amount += 1;
    if(tempCart[index].amount > 5){
        alert('maximum order amount is 5');
        tempCart[index].amount = 5;
    }
    setNewCart(tempCart);
    setStatus(!status);
}


return(
    <AuthContext.Provider value = {{updateCart: updateCart, 
                                    onCartClick : onCartClick, 
                                    isCartDisplayed: isCartDisplayed, 
                                    cart: cart, 
                                    reduceAmount: reduceAmount,
                                    addAmount: addAmount,
                                    status: status
                                     }}  > 
    {props.children} 
    </AuthContext.Provider>

)

};

export default AuthContext;