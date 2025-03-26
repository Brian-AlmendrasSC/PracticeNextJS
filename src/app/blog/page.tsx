import { resolve } from "path"

export default async function Blog() {
    const Message=await new Promise(resolve=>{
        setTimeout(() => {
            resolve(`Blog `)
        }, 3000);
    })
    return Message
}