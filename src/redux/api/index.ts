import { create } from "apisauce";
import {ActivateUserData, SignInUserData, SignUpUserPayload, UserPayloadData} from "../reducers/@types";

const API = create({
    baseURL: "https://studapi.teachmeskills.by",
})
const getPosts = ()=>{
    return API.get("/blog/posts/?limit=12")
}
const getSinglePost = (id:string)=>{
    return API.get(`/blog/posts/${id}/`)
}

const signUpUser = (data: UserPayloadData) => {
    return API.post("/auth/users/", data);
};
const activateUser = (data: ActivateUserData) => {
    return API.post("/auth/users/activation/", data);
};

const signInUser = (data: SignInUserData) => {
    return API.post("/auth/jwt/create/", data);
};

const getUserInfo = (token: string) => {
    return API.get(
        "/auth/users/me/",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};


export default {
    getPosts,
    getSinglePost,
    signUpUser,
    signInUser,
    activateUser,
    getUserInfo,
    };