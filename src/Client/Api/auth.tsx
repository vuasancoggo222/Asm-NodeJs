import { UserType } from "../Types/user"
import instance from "./instance"
export const signin =(user: UserType) =>{
    const url = "signin"
    return instance.post(url,user)
}
export const signup =(user: UserType) =>{
    const url = "signup"
    return instance.post(url,user)
}