import React from 'react';
import classes from './Meal.css'
import MealIngredient from './MealIngredient/MealIngredient'

const meal = (props) => {
    return (
            <div className={classes.Burger}>
                <MealIngredient type='bread-top'/>
                <MealIngredient type='cheese'/>
                <MealIngredient type='meat'/>
                <MealIngredient type='bread-bottom'/>
            </div>

    )
}

export default meal;