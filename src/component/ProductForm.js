import React, {useState} from 'react'
import {addProductDetails} from '../actions/ProductActions'
import { useDispatch, useSelector } from 'react-redux';


const ProductForm = ({closeModal}) => {
    const dispatch = useDispatch()

    const [productDetail, setProducrDetail] = useState({
        name :"",
        description : "",
        brand : "",
        category : "",
        price : ""
    })
    const handlerChange = (e) => {
         const { name, value } =e.target
         setProducrDetail({...productDetail,[name]:value})
    } 
    const onSubmit = (e) => {
       e.preventDefault();
       const data = {
        productInfo : productDetail
       }
       dispatch(addProductDetails(data))
    }
// console.log(productDetail)
    return (
        <div >
            <div>
                <h3>Add Product </h3>
                <button onClick={closeModal}>close </button>
            </div>
        <form>
            <label for="Product Name">Product Name</label><br />
            <input type="text" id="fname" name="name"  onChange={ handlerChange}  value={productDetail.name} /><br />
            <label for="Description"></label>Description<br />
            <input type="text" id="lname" name="description" onChange={ handlerChange} value={productDetail.description}/><br />
            <label for="brand"></label>brand<br /><br />
            <input type="text" id="lname" name="brand" onChange={ handlerChange } value={productDetail.brand}/><br />
            <label for="category"></label>category<br /><br />
            <input type="text" id="lname" name="category" onChange={ handlerChange} value={productDetail.category}/><br />
            <label for="price"></label>price<br /><br />
            <input type="text" id="lname" name="price" onChange={handlerChange} value={productDetail.price}/><br />
            <button onClick={ (e) => onSubmit(e)}>Submit</button>
            
            </form>
     </div>
    )
}

export default ProductForm
