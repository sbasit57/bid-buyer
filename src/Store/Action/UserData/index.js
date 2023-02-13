import axios from "axios";
import { Alert } from "react-native";

const getProduct = async (data,setProductData, token) => {
    await axios.post(`https://reverse-bidding.vercel.app/product/view-product-by-category`,data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(e => {
            setProductData(e.data.data.successResult);
        })
        .catch(err => {
            console.log("getProduct error", err);
        });
};
const postBid = async (data,token,navigation) => {
    await axios.post(`https://reverse-bidding.vercel.app/post/add-post`,data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(e => {
            alert("Bid placed");
            navigation.navigate("Home")
        })
        .catch(err => {
            console.log("getProduct error", err.response.data);
        });
};

export {
    getProduct,
    postBid
};