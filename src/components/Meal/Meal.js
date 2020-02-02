import React from 'react';
import classes from './Meal.css'
import MealIngredient from './MealIngredient/MealIngredient'

const meal = (props) => {
    //dinamic output of ingredients from mealBuilder
    // creating an array from object
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // ...Array(3) -> array with 3 elements
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
                return <MealIngredient key={igKey + i} type={igKey} />
            } )
        }).reduce((arr, el) => {
            return arr.concat(el) // reduce method to flatten 1 array with 4 inner arrays into only 1 array with OBJECTS
        }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients</p>
        }


    return (
            <div className={classes.Burger}>
                <MealIngredient type='bread-top'/>
                {transformedIngredients}
                <MealIngredient type='bread-bottom'/>
                <p>Total price: {props.price}$</p>
                <button onClick={props.reset}>Reset</button>
            </div>

    )
}
export default meal;