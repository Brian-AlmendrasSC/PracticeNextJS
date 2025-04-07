'use client'
import { notFound,useParams } from "next/navigation";
import { Metadata } from "next";

type Props={
    params: 
    {
        productId: string,
        reviewId: string
    }
}

function getRandomInt(count:number) {
    return Math.floor(Math.random()*count)
}
// export const generateMetadata=async ({params}:Props): Promise<Metadata>=>{
//     const title= await new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(`the review is ${params.reviewId}`)
//         }, 100);
//     })
//     return {
//         title: `${title}`
//     }
// } this doesn't work with next/navigation library 

// export default function reviewDetails({params}:Props) //with direct params in the function
export default function reviewDetails(){
let answer;
const params=useParams<{reviewId:string,productId:string}>();
    

    if(parseInt(params.reviewId) > 100){
        notFound();
    }else if(getRandomInt(3)==1){
        throw new Error("This review doesn't exist or can't permited the access");
    }
    else{
        answer=<h1> Product is {params.productId} and review is {params.reviewId}</h1>;
    }
    // answer= parseInt(params.reviewId) > 100? 
    //     notFound() : 
    //     <h1> Product is {params.productId} and review is {params.reviewId}</h1>
    
   return answer;
}