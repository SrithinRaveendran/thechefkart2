import './DishList.css'
import { useState, useEffect, } from 'react';

import DishCard from './DishCard';
import dishes from './data/mockDishex';



const DishList = (props) => {

    const { vegOnly, nonVegOnly, allDishes, setAllDishes, selectedCategory,setIngredientitem } = props;
    const [filteredDishes, setFilteredDishes] = useState(allDishes);
    
    console.log(typeof(setIngredientitem));

    useEffect(() => {
        const filtered = allDishes.filter(dish =>
            (selectedCategory === "starter" && dish.category === "STARTER") ||
            (selectedCategory === "mainCourse" && dish.category === "MAIN COURSE") ||
            (selectedCategory === "dessert" && dish.category === "DESSERT") ||
            (selectedCategory === "sides" && dish.category === "SIDES") ||
            (selectedCategory === null) // when null, keep all items
        );
        setFilteredDishes(filtered);
    }, [selectedCategory, allDishes]);

    useEffect(() => {
        if (vegOnly) {
            const vegDishes = allDishes.filter((dish) => dish.type === "VEG");
            setFilteredDishes(vegDishes);
            console.log("vegDishes", vegDishes);
        }
        else if (nonVegOnly) {
            const nonVegDishes = allDishes.filter((dish) => dish.type === "NON-VEG");
            setFilteredDishes(nonVegDishes);
            console.log("nonVegDishes", nonVegDishes);
        } else if (!vegOnly && !nonVegOnly) {
            setFilteredDishes(dishes);
        }
    }, [vegOnly,nonVegOnly, setAllDishes,allDishes ]);

    return (

        <div className='dish-list-main'>
            {filteredDishes.map((dish) => (
                <DishCard data={dish} allDishes={allDishes} setAllDishes={setAllDishes} key={dish.id} setIngredientitem={setIngredientitem} />

            ))}

        </div>


    )
}

export default DishList;