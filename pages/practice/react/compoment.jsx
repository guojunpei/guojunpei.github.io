
import React from 'react';
import { render } from 'react-dom';

class shoppingList extends React.Component{
    render(){
        return(
            <div className="shopping-list">
                <h1>shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}