import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const incHandle = () => {
        setCount(count + 1)
    }
    const decHandle = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incHandle}>Add</button> &nbsp; <button onClick={decHandle}>Sub</button>
        </div>
    )
}

export default Counter
