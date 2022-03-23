import instance from "./instance"


export const list = () =>{
    const url = `categories`
    return instance.get(url)
    }

export const create = (category: string)=>{
    const url = `categories`
    return instance.post(url)
}