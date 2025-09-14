import './Ingredient.css'

const Ingredient = (prop) => {
    const {ingredient,setIngredientitem} = prop
    const image="https://shorturl.at/8Y06b"

    const backclick = () => {
        setIngredientitem([]);
    }
    return (
        <div className="ingredient-main-container">
            <div className='ingredient-heading-container'>
                <button className='ingredient-arrow-btn' onClick={backclick}> ← </button>
                <h2 className='ingredient-heading'>Ingredients</h2>
            </div>
            <div className='list-container'>
                
                <ul className='ul-element'>
                    <h2>{ingredient[0]}</h2>
                    {ingredient.slice(1,-1).map(each=>
                    <li className='ingredient-list-item'>{each}</li> )}
                    
                </ul>   
                <div className='image-conatiner'>
                    <img className='ingredient-image' src={image} alt="ingredientimage" />
                    </div> 
            </div>
        </div>
    )
}

export default Ingredient;