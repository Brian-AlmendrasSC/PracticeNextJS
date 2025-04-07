'use client'
export default function ErrorReview({error,reset}:{
    error:Error,
    reset:()=>void
}) {
    // return <h1> Implement view for error</h1>r
    return( 
    <div>
        {error.message+"\n"}

        <button style={{color:"white",borderColor:"white"}} onClick={reset}>Try again</button>
    </div>)
}