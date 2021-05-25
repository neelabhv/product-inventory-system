import React, { useEffect, useState } from 'react';

export default function AddProduct(){

    const [productdetails, setProductDetail] = useState({product_name:'',product_description:'',manufacturer:'',price:'',quantity:''})

    useEffect(()=>{
        console.log(productdetails);
    },[productdetails]);
    return(
        <div id="div-addproduct">
            
            Product Name : <input type="text" onChange={e=>{setProductDetail({...productdetails,product_name:e.target.value})}}></input>
            Product Description : <input type="text" onChange={e=>{setProductDetail({...productdetails,product_description:e.target.value})}}></input>
            Manufacturer : <input type="text" onChange={e=>{setProductDetail({...productdetails,manufacturer:e.target.value})}}></input>
            Price : <input type="number" onChange={e=>{setProductDetail({...productdetails,price:e.target.value})}}></input>
            Quantity : <input type="number" onChange={e=>{setProductDetail({...productdetails,quantity:e.target.value})}}></input>
        </div>
    )
}