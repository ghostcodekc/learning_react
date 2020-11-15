import React from 'react';
import Loader from '../Components/Loader'
import {useParams} from 'react-router-dom'
import {useAxiosGet} from '../Hooks/HttpRequests'

function Product() {
    const {id} = useParams()
    const url = `https://5fb04fc27edddb00164683c6.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null
    
    
    if(product.loading){
        content = <Loader></Loader>
    }
    
    if(product.error){
        content = <p>No product found...</p>
    }

    if(product.data){
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
                <div>
                <img src={product.data.images[0].imageUrl}
                alt={product.data.name}
                />
                </div>
                <div className="font-bold text-xl mb-3">
                $ {product.data.price}
                </div>
                <div>
                {product.data.description}
                </div>
            </div>
    }

    return (
        <div>{content}</div>
    )
}

export default Product