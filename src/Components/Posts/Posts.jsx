import React,{useEffect,useContext, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../Store/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { PostContext } from '../../Store/postContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const {db}=useContext(FirebaseContext)
  const navigate=useNavigate()
  const [products,setProducts]=useState([])
  const {setPostDetails}=useContext(PostContext)
  useEffect(()=>{
    getDocs(collection(db,'products')).then((data)=>{
      const allPost=data.docs.map((product)=>{
        return{
          ...product.data(),id:product.id
        } 
      })
      setProducts(allPost)
    })
  })
  return (
    <div className="postParentDiv container">
      
      <div className="recommendations" >
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {
            products.map(product=>{
              return <div className="card"
              onClick={()=>{
                setPostDetails(product)
                navigate('/view-details')
              }}
              >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
            })
            }
        </div>
      </div>
    </div>
  );
}

export default Posts;
