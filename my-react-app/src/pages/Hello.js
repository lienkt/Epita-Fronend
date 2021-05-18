import { Increments, Decrements } from './components/Increments'
import { useState } from 'react'

const Hello = () => {
    const [ value, setValue ] = useState(10)
    return <section>
        <h1>Hello!</h1>
        <div>{ value }</div>
        <Increments value={value} setValue={setValue} />
        <Decrements value={value} setValue={setValue} />
    </section>
}
export default Hello;