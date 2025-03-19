export default function name({params}:{
    params: {productId: string} 
}) {
    return <h1>this product is {params.productId}</h1>
}