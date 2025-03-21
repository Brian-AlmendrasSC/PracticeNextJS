'use client'
import { useParams } from "next/navigation";
export default function BlogPost() {
    const params=useParams<{blogpost:string[]}>();
    let urlPost='';
    return (
        <>
        ${
            params.blogpost.map((post,index)=>{
            console.log("this post "+post+ "  index "+index)
            urlPost=urlPost+"/"+post;
            })}
            this url {urlPost}
        </>
    )
} 