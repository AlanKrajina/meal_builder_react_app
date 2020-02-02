import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad',  price: '0.5'},
    { label: 'Bacon', type: 'bacon',  price: '0.7'},
    { label: 'Cheese', type: 'cheese',  price: '0.4'},
    { label: 'Meat', type: 'meat',  price: '1.5'},
]

const buildControls = (props) => (


        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl 
                price={ctrl.price} 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                />
            ))}
        </div>

)
export default buildControls;