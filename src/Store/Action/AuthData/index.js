import axios from "axios";
import API from "../../../constants/AxiosAPI";
import { LoginUser, TokenId, UserDetail } from "../../Reducer/AuthReducer";

const Register = async (data) => {
    await axios.post(`https://reverse-bidding.vercel.app/user/signUp`, data)
        .then(e => {
            if (e.data.success == true) {
                alert("Account Created");
            };
            if (e.data.data.errorResult == "this email already exists") {
                alert("User already exists");
            };
        })
        .catch(err => {
            console.log("Register Error", err)
        });
};

const LoginApi = async (data, dispatch) => {
    await axios.post(`https://reverse-bidding.vercel.app/user/signIn`, data)
        .then(e => {
            dispatch(TokenId(e.data.data.successResult.token));
            dispatch(UserDetail(e.data.data.successResult.user));
            dispatch(LoginUser(true))
        })
        .catch(err => {
            console.log("Login Error", err);
        });
};

export {
    LoginApi,
    Register,
};