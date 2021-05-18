import { useEffect, useState } from 'react'

const ListProducts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/post')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setPosts(json)
        })
    }, [])

    return (<>
        <h1>List pd</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </>)
}
export default ListProducts