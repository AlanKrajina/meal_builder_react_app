import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Meal from '../../components/Meal/Meal';
import BuildControls from '../../components/Meal/BuildControls/BuildControls';

class MealBuilder extends Component {
    state ={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
render () {


    return (
        <Aux>
            <Meal ingredients={this.state.ingredients}/>
            <BuildControls />
        </Aux>
    )

}
}

export default MealBuilder;