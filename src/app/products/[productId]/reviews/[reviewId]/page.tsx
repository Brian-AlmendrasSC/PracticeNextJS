import { notFound } from "next/navigation";


export default function reviewDetails({params}:{
    params: 
    {
        productId: string,
        reviewId: string
    }
}) {
    let answer;
    answer= parseInt(params.reviewId) > 100? notFound() : <h1> Product is {params.productId} and review is {params.reviewId}</h1>
    
   return answer;
}