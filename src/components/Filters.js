import './filters.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import dishes from './data/mockDishex';

const Filters = (props) => {

    const { setVegOnly, setNonVegOnly, allDishes, setSelectedCategory, selectedCategory,setAllDishes } = props;

    const [veg, setveg] = useState(false);
    const [nonveg, setNonveg] = useState(false);
    const [btnclicked, setBtnclicked] = useState(false);
    const [searchinput,setSearchinput] = useState("");


    const searchChangeHandler = (event) => {
        setSearchinput(event.target.value);
        const filteredsearch = allDishes.filter(dish => dish.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setAllDishes(filteredsearch);
        if(event.target.value === ""){
            setAllDishes(dishes);
        }
    }

    useEffect(() => {

        setNonVegOnly(nonveg)
        setVegOnly(veg)

    }, [veg, nonveg, setNonVegOnly, setVegOnly])

    const categoryClick = (event) => {
        console.log("event target id", event.target.id);
        if (selectedCategory === event.target.id && btnclicked) {
            setSelectedCategory(null);
            setBtnclicked(false);
            return;
        }
        setSelectedCategory(event.target.id);
        setBtnclicked(prev => prev = true ? true : false);
    }

    const starterCount = allDishes.filter(dish => dish.category === "STARTER" && dish.qty > 0).length;
    const mainCourseCount = allDishes.filter(dish => dish.category === "MAIN COURSE" && dish.qty > 0).length;
    const dessertCount = allDishes.filter(dish => dish.category === "DESSERT" && dish.qty > 0).length;
    const sidesCount = allDishes.filter(dish => dish.category === "SIDES" && dish.qty > 0).length;
    return (
        <div>

            <div className='searchbar-container'>
                <input className='searchbar' type="text" placeholder="Search dish for your party...."
                 value={searchinput} onChange={searchChangeHandler}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <div className='filterOptions-Container'>

                <button className={selectedCategory === "starter" && btnclicked ? 'category-btn-orange' : 'category-btn'} id="starter"
                    onClick={categoryClick}>Starter {starterCount}</button>
                <button className={selectedCategory === "mainCourse" && btnclicked ? 'category-btn-orange' : 'category-btn'} id="mainCourse"
                    onClick={categoryClick}>Main Course {mainCourseCount}</button>
                <button className={selectedCategory === "dessert" && btnclicked ? 'category-btn-orange' : 'category-btn'} id="dessert"
                    onClick={categoryClick}>Dessert {dessertCount}</button>
                <button className={selectedCategory === "sides" && btnclicked ? 'category-btn-orange' : 'category-btn'} id="sides"
                    onClick={categoryClick}>Sides {sidesCount}</button>
            </div>

            <div className='toggle-btn-container'>
                <p>Main Courses Selected ({mainCourseCount})</p>
                <div className='nonveg-veg-btn-container'>
                    <div className='veg-non-btn-adjust'>
                        <button
                            className={`toggle-btn ${veg ? 'toggled' : ''}`}
                            onClick={() => {
                                setveg(prev => !prev);
                            }}
                        >
                            <div className="thumb" style={{ backgroundColor: "green" }}></div>
                        </button>
                    </div>

                    <div>
                        <button
                            className={`toggle-btn ${nonveg ? 'toggled' : ''}`}

                            onClick={() => {
                                setNonveg(prev => !prev) 
                            }}
                        >
                            <div className="thumb" style={{ backgroundColor: "red" }}></div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filters;