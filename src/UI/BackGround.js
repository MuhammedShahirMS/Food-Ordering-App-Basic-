import MealsSummary from '../components/MealsSummary';
import image from './meals.png';
import CartButton from '../components/Cart/CartButton';
import classes from './BackGround.module.css';


const BackGround = (props) => {

const Image = () => {
        return(
            <div className = {classes['main-image']} >
        <img src={image}  />
        </div>
        )
    }

    return (
    <div className = {classes.background}>
    <header className = {classes.header}>
    <div className = {classes.desc}> MX Feast </div>
    <CartButton/>
        </header>
    <MealsSummary/>
    <Image/>
    </div>
    )
};

export default BackGround;