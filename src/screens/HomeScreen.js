import React, { useState,useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { listProducts  } from '../actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../component/Product';
// import {Products} from '../Services/GetProducts';
    
const HomeScreen = () => {
    // const [item, setitem] = useState([]);
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())

        // const ProductsDelaits = async () => {
        //     let response = await Products();
        //     // console.log(response)
        //     if(response.status){
        //         setitem(response.products)
        //     }
           
        // }
        // ProductsDelaits();
    }, [dispatch])
    return (
        <>
            <h1>Leatest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen;
