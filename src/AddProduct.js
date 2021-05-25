import React, { useEffect, useState } from 'react';
import './css/AddProduct.css';

export default function AddProduct(){

    const [productdetails, setProductDetail] = useState({product_name:'',product_description:'',manufacturer:'',price:'',quantity:''})

    useEffect(()=>{
        console.log(productdetails);
    },[productdetails]);

    return(
        <div id="div-addproduct">
            <div className="add_productdetails">Product Name : <input type="text" onChange={e=>{setProductDetail({...productdetails,product_name:e.target.value})}}></input>
            </div>
            <div className="add_productdetails">Product Description : <input type="text" onChange={e=>{setProductDetail({...productdetails,product_description:e.target.value})}}></input>
            </div>
            <div className="add_productdetails">Manufacturer : <input type="text" onChange={e=>{setProductDetail({...productdetails,manufacturer:e.target.value})}}></input>
            </div>
            <div className="add_productdetails">Price : <input type="number" onChange={e=>{setProductDetail({...productdetails,price:e.target.value})}}></input>
            </div>
            <div className="add_productdetails">Quantity : <input type="number" onChange={e=>{setProductDetail({...productdetails,quantity:e.target.value})}}></input>
        </div>
            </div>
    )
}