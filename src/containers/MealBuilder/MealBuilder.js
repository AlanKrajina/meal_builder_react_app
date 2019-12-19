import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Meal from '../../components/Meal/Meal';

class MealBuilder extends Component {

render () {


    return (
        <Aux>
            <Meal/>
            <div>Meal controls</div>
        </Aux>
    )

}
}

export default MealBuilder;