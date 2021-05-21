export const getProducts = async () => {
    let response = await fetch('http://localhost:3000/products')
    let products = await response.json()
    console.log(products)
    return products
}