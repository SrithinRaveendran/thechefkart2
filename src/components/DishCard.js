import './DishCard.css'
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import Modal from './IngredientModal';

const DishCard = (props) => {
    const imageurl = "https://shorturl.at/v6tZD"
    const { data, allDishes, setAllDishes ,setIngredientitem} = props;

    const { name,  type, description, id } = data;


    const handleAdd = () => {
        const updatedDishes = allDishes.map(dish =>
            dish.id === id ? { ...dish, qty: (dish.qty) + 1 } : dish
        );
        setAllDishes(updatedDishes);
    };

    const handleRemove = () => {
        const updatedDishes = allDishes.map(dish =>
            dish.id === id && dish.qty > 0 ? { ...dish, qty: dish.qty - 1 } : dish
        );
        setAllDishes(updatedDishes);
    }
    console.log(typeof(setIngredientitem));

    

    const qtyneeded = allDishes.find(dish => dish.id === id)?.qty || 0;
   

    const onClickIngredient = () => {
         const ingredientlist = data?.ingredients || [];
         setIngredientitem([name,...ingredientlist]);
        console.log("ingredient clicked",ingredientlist);
    }
    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openOrCloseModal = () => setIsModalOpen(prev => !prev);

    return (
        <div className="dish-list-main-container">

            <div className='description-container'>
                <div className='dish-name-symbol-container'  onClick={openOrCloseModal}>
                    <h2 className='dish-name'>{name}</h2>
                    {type === "VEG" ?
                        <div className='icon-outersquare-veg'>
                            <div className='icon-innercircle-veg'> </div>
                        </div> :
                        <div className='icon-outersquare-red'>
                            <div className='icon-innercircle-red'> </div>
                        </div>}
                </div>
                <p className='dish-description'  onClick={openOrCloseModal}>
                    {description.length > 45 ? <>{description.slice(0, 45)}...<span className='span-elements' >Read More</span> </> : { description }}
                </p>
                <div className='carrot-container' onClick={onClickIngredient}>
                    <FontAwesomeIcon icon={faCarrot} style={{ color: "#FFD43B", }} />
                    <p>Ingredient</p>
                </div>
            </div>

            <div className='image-part-container'>

                <div className='image-add-btn-container'>
                    <img className='dish-image' src={imageurl} alt="dishimage" />
                    {qtyneeded > 0 ?
                        <button className='remove-btn' onClick={handleRemove}>Remove -</button> :
                        <button className='add-btn' onClick={handleAdd}>Add +</button>
                    }
                </div>
            </div>
            <Modal
                isModalOpen={isModalOpen}
                imageUrl={imageurl}
                description={data?.description}
                name={data?.name}
                id={data?.id}
                handleRemove={handleRemove}
                handleAdd={handleAdd}
                qtyneeded={qtyneeded}
            />


        </div>
    )
}

export default DishCard;

