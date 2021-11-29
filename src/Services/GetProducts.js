import axios from "axios";

const Products =async () => {
    const response = await axios.get('http://localhost:5000/backend/get-products');
    return response.data;
}

const Product = async (id) => {
    const response = await axios.get('http://localhost:5000/backend/get-product/'+ id)
    return response.data
}

const addProduct = async (data) => {
    const response = await axios.post('http://localhost:5000/backend/add-product', data)
    return response.data
}

export { 
    Products, Product, addProduct
}