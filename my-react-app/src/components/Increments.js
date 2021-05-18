// import { useState } from 'react'

const Increments = ({ value, setValue }) => {
    const clickHandler = () => {
        setValue(value + 1)
    }
    return (
        <div>
            <button onClick={clickHandler}>Increaments</button>
        </div>
    )
}
const Decrements = ({ value, setValue }) => {
    const clickHandler = () => {
        setValue(value - 1)
    }
    return (
        <div>
            <button onClick={clickHandler}>Decreaments</button>
        </div>
    )
}
export {
    Increments,
    Decrements
} 