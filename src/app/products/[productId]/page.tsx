'use client' // this for uses params wihtout problems, it just uses when you consume the Client
import { useParams } from 'next/navigation'
export default function name(){
    const params=useParams<{productId:string}>() 
    return <h1>this product is {params.productId}</h1>
}