export default function reviewDetails({params}:{
    params: 
    {
        productId: string,
        reviewId: string
    }
}) {
   return <h1> This product is {params.productId} and the review is {params.reviewId} </h1>
}