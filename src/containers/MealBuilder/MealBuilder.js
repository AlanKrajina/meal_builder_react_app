import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Meal from '../../components/Meal/Meal';

class MealBuilder extends Component {
    state ={
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
render () {


    return (
        <Aux>
            <Meal ingredients={this.state.ingredients}/>
            <div>Meal controls</div>
        </Aux>
    )

}
}

export default MealBuilder;