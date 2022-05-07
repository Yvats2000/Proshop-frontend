import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Redirect } from 'react-router'
import { Row, Col } from 'react-bootstrap';
import { listProducts  } from '../actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../component/Product';
import { Navbar, Nav, Container } from 'react-bootstrap';
import  Pagination  from '../component/Pagination';
// import {Products} from '../Services/GetProducts';
// import productForm from '../component/ProductForm'
import ProductForm from '../component/ProductForm';
    
const HomeScreen = () => {
    let history = useHistory();
    const [item, setitem] = useState([]);
    const [itemList, setitemList] = useState([])
    const [search, setSearch] = useState('');
    // const [loading, setloadng] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [postsPerpage] = useState(4);
    // const [navigate , setNavigate] = useState(false)

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    const [showModal, setShowModal] = useState(false)

    useEffect(async() => {
        dispatch(listProducts())

        //     if(response.status){
        //         setitem(response.products)
        //     }
        // }
        // ProductsDelaits();
    }, [dispatch])

    useEffect(()=>{
    if(products&&products.length>0){
    setitem(products);
    setitemList(products)

   }
    },[products])
    // console.log(item,"==>")
    // console.log(itemList,'09090') 3 baar kyu chal rha h console  m 

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => [
        setShowModal(false)
    ]

    const handelSearch = (e) => {
       console.log(e.target.value,'yiyi')
        setSearch(e.target.value)
        if(search !== '') {
        const newArry = item.filter((i) => JSON.stringify(i).match(new RegExp(search,"i")))
            setitemList(newArry)
        } else {
          setitemList(products)
        }
    }
    const redirecthandler = () => {
        history.push('/talkToExport')
        
    }

    // get Current posts
    const indexOfLastPost = currentPage * postsPerpage;
    const indexOfFirstPost = indexOfLastPost - postsPerpage;
    const currentPosts = itemList.slice(indexOfFirstPost, indexOfLastPost);
    // console.log(currentPosts,'8787')
    
    //change page
    const paginate = (paginate) => setcurrentPage(paginate)

    return (
        <>
        <div>
            <h1>Leatest Products</h1>
            <button onClick={openModal}>Add Product</button>
            {/* <Link to="/talkToExport">TalkToExport</Link> */}
            <button onClick={redirecthandler}>TalkToExport</button>
            <span>
                <input type="text" onChange={() => handelSearch()} value={search} placeholder="Search.." />
                <button type="submit">Search</button>
            </span>
        </div>
            <Row>
                {currentPosts&& currentPosts.length>0 && currentPosts.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            <Pagination postsPerPage={postsPerpage} totalPosts={itemList.length} paginate={paginate} />
            {showModal ? <ProductForm closeModal={closeModal}  /> : null}
        </>
    )
}

export default HomeScreen;
