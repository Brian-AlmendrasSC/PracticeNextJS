'use client'
export default function ErrorReview({error}:{
    error:Error
}) {
    // return <h1> Implement view for error</h1>r
    return <h1>{error.message} </h1>
}