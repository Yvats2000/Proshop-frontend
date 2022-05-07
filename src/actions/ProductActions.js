import axios from 'axios';
import { PRODUCT_LIST_REQUEST, 
        PRODUCT_LIST_SUCCESS, 
        PRODUCT_LIST_FAIL,
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAIL} from '../constants/ProductConstants'

import {Products, Product, addProduct, removeproduct} from '../Services/GetProducts';


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const { products } = await Products();

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: products,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
}

export const deleteProductAction = (data) => async (dispatch) => {
    try{
        dispatch({type: 'DELETE_PRODUCT_REQUEST'})
        const response = await removeproduct(data)
         console.log(response);
         if(response.status){
            dispatch({
                type: 'DELETE_PRODUCT',
                payload: data.id
            })
         }
       
    } catch(error){
        console.log(error)
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        // console.log(id,'yoyo')
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {product} = await Product(id);
    // console.log(product)
    console.log(product)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: product,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
}

export const addProductDetails = (data) => async (dispatch) => {
    try {
        dispatch({type: "ADDPRODUCT_DETAILS_REQUEST"})
        const {product} = await addProduct(data);
    // console.log(product)
        dispatch({
            type: "ADDPRODUCT_DETAILS_SUCCESS",
            payload: data,
        })
        dispatch(listProductDetails(data.id))
    } catch (error) {
        dispatch({
            type: "ADDPRODUCT_DETAILS_FAIL",
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
}