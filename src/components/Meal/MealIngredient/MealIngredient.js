import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import classes from './MealIngredient.css';
import './MealIngredient.css';

class MealIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className='BreadBottom'>BreadBottom</div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className='BreadTop'>BreadTop
                        {/*<div className='Seeds1'>Seeds1</div>
                        <div className='Seeds2'>Seeds2</div>*/}
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className='Meat'>Meat</div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className='Cheese'>Cheese</div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className='Bacon'>Bacon</div>;
                break;
            case ( 'salad' ):
                ingredient = <div className='Salad'>Salad</div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

MealIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default MealIngredient;