import { useEffect, useState } from 'react'
import Product from './product'

const Products = ({ carts, setCarts }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/products.json')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok')
                return res.json()
            })
            .then((json) => {
                setData(json)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message || 'Failed to load products')
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className='flex justify-center items-center py-20'>
                <span className='loading loading-spinner text-primary'></span>
            </div>
        )
    }

    if (error) {
        return (
            <div className='text-center text-red-600 py-16'>
                {error}
            </div>
        )
    }

    return (
        <div className='container mx-auto space-y-10 my-10'>
            <div className='text-center text-black space-y-5'>
                <h1 className='text-5xl font-bold '>Premium Digital Tools</h1>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed
                to boost your productivity and creativity.</p>
            </div>
          
            <div className='grid grid-cols-2 md:grid-cols-3  gap-8'>
                {data.map((product) => (
                    <Product
                        product={product}
                        key={product.id}
                        carts={carts}
                        setCarts={setCarts}
                    ></Product>
                ))}
            </div>
            
        </div>
    )
}

export default Products
