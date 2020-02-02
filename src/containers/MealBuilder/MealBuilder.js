import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Meal from '../../components/Meal/Meal';
import BuildControls from '../../components/Meal/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.7
}

class MealBuilder extends Component {
    state ={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] > 0){
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    } else {
        console.log('no ingredients left')
        }}

        reset = () => {
            this.setState({totalPrice: 1,ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },})}

render () {
    return (
        <Aux>
            <Meal ingredients={this.state.ingredients} price={this.state.totalPrice} reset={this.reset}/>
            <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}/>
        </Aux>
    )

}
}

export default MealBuilder;