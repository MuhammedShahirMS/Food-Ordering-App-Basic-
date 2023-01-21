import React, { useContext, useState, useEffect } from 'react';
import BackGround from './UI/BackGround';
import Menu from './components/Menu/Menu';
import AuthContext from './components/context/context-Item';

const App = () => {


const [menu, setMenu] = useState([]);
const [hasLoadingError, setHasLoadingError] = useState(null);
const ctx = useContext(AuthContext);

useEffect( () => {       // for fetching data for displaying Meals List upon loading the page.
const menuFetch = async () => {
    try {
    const response = await fetch('https://food-order-app-c034a-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json');
    if(!response.ok) {
      throw new Error('Failed');
    }
    const data     = await response.json();
    const dishMenu = [];
    for(let key in data) {
      dishMenu.push({id: key,
                  name: data[key].name,
                  description: data[key].description,
                  price: data[key].price });
    }
    
    setHasLoadingError(null);
    setMenu(dishMenu);

    }catch(err) {
      setHasLoadingError(true);
    }
  }

   menuFetch();

  }, [])


const toCart = (amount, id) => {          // a fn. is called from Child component (props) for adding new item to Cart
    const index = menu.findIndex(item => item.id === id);
    const arr = {...menu[index],
                 amount: +amount  };
    ctx.updateCart(arr);
  }
 
  

  return( 
    
      <div>
    <BackGround/>
    {!hasLoadingError && <Menu menu = {menu} newItem = {toCart}/>}
    {hasLoadingError && <h2 className='error'> -- Failed to fetch Menu...Please check your Internet Connection -- </h2>}
    </div>
    
  )  
};

export default App;
