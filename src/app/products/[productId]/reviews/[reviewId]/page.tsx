import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props={
    params: 
    {
        productId: string,
        reviewId: string
    }
}

export const generateMetadata=async ({params}:Props): Promise<Metadata>=>{
    const title= await new Promise(resolve=>{
        setTimeout(() => {
            resolve(`the review is ${params.reviewId}`)
        }, 100);
    })
    return {
        title: `${title}`
    }
}

export default function reviewDetails({params}:Props) {
    let answer;
    answer= parseInt(params.reviewId) > 100? notFound() : <h1> Product is {params.productId} and review is {params.reviewId}</h1>
    
   return answer;
}