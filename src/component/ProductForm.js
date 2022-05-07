import React, {useEffect, useState} from 'react'
import {addProductDetails} from '../actions/ProductActions'
import { useDispatch, useSelector } from 'react-redux';


const ProductForm = ({closeModal,product}) => {
    const dispatch = useDispatch()

    const [uploading, setUploading] = useState(false)
    const [productDetail, setProducrDetail] = useState({
        name :"",
        description : "",
        image: '',
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
       const check = validation()
       if(check) {
        let data;
        if(productDetail._id){
            data = {
                productInfo : productDetail,
                id:productDetail._id
               }
               
        }else{
            data = {
                productInfo : productDetail
               }
        }
        // console.log(data)
       dispatch(addProductDetails(data))
    } else {
        alert("plz fill all mandotary feilds")
    }
    empty()
    }
    const empty= () => {
        setProducrDetail({
        name :"",
        description : "",
        image: "",
        brand : "",
        category : "",
        price : ""
            
        })
    }
    const validation = () => {
        let valid=true
        for(let key in productDetail){
            // console.log(productDetail[key]);
            if(productDetail[key]===''){
                valid=false
                break;
                 
            }
        }
        return valid
    }

    // const uploadFileHnadler = () => {
    //     const file = e.target.files[0]
    //     const formData = new FormData()
    //     formData.append('image', file)
    //     setUploading(true)
    //     try {
    //         const config = {
    //             header: {
    //               "Content-Type": "multipart/form-data",
    //             },
    //           };
    //         const { post } = await axios.post('http://localhost:5000/backend/')
    //     }catch(error){

    //     }
    // }
    useEffect(()=>{
     if(product){
         console.log(product)
        setProducrDetail(product)
     }
    },[])
// console.log(productDetail)
    return (
        <div >
            <div>
                <h3>Add Product </h3>
                <button onClick={closeModal}>close</button>
            </div>
        <form>
            <label for="Product Name">Product Name</label><br />
            <input type="text" id="fname" name="name"  onChange={ handlerChange}  value={productDetail.name} /><br />

            <label for="Description"></label>Description<br />
            <input type="text" id="lname" name="description" onChange={ handlerChange} value={productDetail.description}/><br />

            <label for="image"></label>image<br /><br />
            <input type="text" id="image" name="image" onChange={ handlerChange } value={productDetail.image}/><br />
            {/* <input
              type="file"
              name="image"
              onChange={uploadFileHnadler}
              placeholder="choose image file"
            /> */}

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
