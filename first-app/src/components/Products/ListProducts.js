import { useEffect, useState } from 'react'
import { getProducts } from '../../services/Products'

import styles from './ListProducts.module.css'
import FormAddProduct from './FormAddProduct'

const ListProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        (async () => {
            let fetchedProducts = await getProducts()
            setProducts(fetchedProducts)
        })()

    }, [])
	
	/*
	const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        fetch(`${process.env.REACT_APP_API_URL}/posts`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setPosts(json)
        })
    }, [])
	*/
	
    return (
        <div>
            <FormAddProduct />
            <h2 className={styles.title}>List of products</h2>
            <ul>
                { products && products.map((prod) => (
                    <li key={prod._id}>{prod.name} - Price: {prod.price}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListProducts;