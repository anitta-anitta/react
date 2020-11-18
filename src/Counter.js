//import logo from './logo.svg';
//import './App.css';
import React from 'react';

function Counter(){
    const [ count, setCount ] = React.useState(0);
    const [ title, setTitle ] = React.useState("Counter");

    const  increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        setCount(count-1);
    }
     return (<div>
        {count}
        Counter
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>);
}

export default Counter;