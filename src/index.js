// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me';
}
// Create a react component
const App = function() {
    const buttonText = 'Click Me';
    const labelName = 'Enter Name: ';
    
    return (
    <div>
        <label className = "label" for="name">{labelName}</label>
        <input id="name" type = "text"/>
        <button style ={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText}
        </button>
    </div>
    );
}


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root'));
