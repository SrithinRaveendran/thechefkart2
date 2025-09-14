
import './App.css';
import { useState, useEffect, } from 'react';

import mockDishes from './components/data/mockDishex';
import Filters from './components/Filters';
// import DishCard from './components/DishCard';
import DishList from './components/DishList';

import Ingredient from './components/Ingredient';

function App() {
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [allDishes, setAllDishes] = useState(mockDishes);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  console.log(ingredient, "my list")

  const setIngredientitem = (item) => {
    setIngredient(item);
    console.log("ingredient in appjs", ingredient);
  }

  useEffect(() => {
    console.log("ingredient in appjs useeffect", ingredient);
  }, [ingredient])

  return (
    <>
      <div className="mobile-app">
        <div className="Mainbackground">
          {ingredient.length > 0 ? <Ingredient ingredient={ingredient} setIngredientitem={setIngredientitem} /> :
            <>
              <Filters setNonVegOnly={setNonVegOnly} setVegOnly={setVegOnly} allDishes={allDishes}
                setAllDishes={setAllDishes} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
              <DishList vegOnly={vegOnly} nonVegOnly={nonVegOnly} allDishes={allDishes} setAllDishes={setAllDishes}
                selectedCategory={selectedCategory} setIngredientitem={setIngredientitem} />
            </>}
        </div>
      </div>
      <div className="desktop-message">
      This application is made for mobile devices only. Laptop/Desktop is not supported.
    </div>
    </>
  );
}

export default App;
