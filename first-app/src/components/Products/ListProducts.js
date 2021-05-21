import { useEffect, useState } from 'react'
import { getProducts } from '../../services/Products'

import styles from './ListProducts.module.css'

export default () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        (async () => {
            let fetchedProducts = await getProducts()
            setProducts(fetchedProducts)
        })()

    }, [])

    return (
        <div>
            <h1 className={styles.title}>List of products</h1>
            <ul>
                { products && products.map((prod) => (
                    <li key={prod._id}>{prod.name} - Price: {prod.price}</li>
                ))}
            </ul>
        </div>
    )
}