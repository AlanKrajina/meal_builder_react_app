import React from 'react';
import classes from './Meal.css'
import MealIngredient from './MealIngredient/MealIngredient'

const meal = (props) => {
    // creating an array from object
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // ...Array(3) -> array with 3 elements
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
                return <MealIngredient key={igKey + i} type={igKey} />
            } )
        })

    return (
            <div className={classes.Burger}>
                <MealIngredient type='bread-top'/>
                {transformedIngredients}
                <MealIngredient type='bread-bottom'/>
            </div>

    )
}

export default meal;