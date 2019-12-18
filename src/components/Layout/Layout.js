import React from 'react';
import Aux from '../../hoc/Auxiliary';


const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, Sidedraw, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;