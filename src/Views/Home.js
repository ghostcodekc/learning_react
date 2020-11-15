import React from 'react';
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import {useAxiosGet} from '../Hooks/HttpRequests'

function Home() {
    const url = `https://5fb04fc27edddb00164683c6.mockapi.io/api/v1/products?page=1&limit=10`
    let products = useAxiosGet(url)
    let content = null;

    if(products.loading){
        content = <Loader></Loader>
    }
    
    if(products.error){
        content = <p>No product found...</p>
    }

    if(products.data){
        content = 
            products.data.map((product) => 
                <div key={product.id}>
                <ProductCard product={product}/>
                </div>
            )
    }

    return (
        <div>
            <h1 className = "font-bold text-2xl mb-3">Best Sellers</h1>
            {content}
        </div>
    )
}

export default Home