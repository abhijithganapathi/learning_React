import React, { useState } from 'react'

function Counter() {

    var [number, setNumber] = useState(0)
    const users=[
        {name:"anu",age:12},
        {name:"amal",age:15}
    ]

    function increment() {
        setNumber(number + 1)
    }
    function decrement() {
        setNumber(number - 1)
    }
    function reset() {
        setNumber(0)
    }

    return (
        <div>
            {number}<br></br>
            <button onClick={increment}>up</button>
            <button onClick={decrement}>down</button>
            <button onClick={reset}>reset</button>
            {
                users.map(i=>(
                    <div>
                        <h4>Name:{i.name}</h4>
                        <h4>Age: {i.age}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Counter