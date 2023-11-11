import React,{useState,useEffect,useContext} from 'react';

import './View.css';
import { PostContext } from '../../Store/postContext';
import { FirebaseContext } from '../../Store/firebase';
import {   collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

function View() {
    const [userDetails,setUserDetails]=useState()
    const {postDetails}=useContext(PostContext)
    const {db} = useContext(FirebaseContext)
    
    
    useEffect(()=>{
        console.log(postDetails);
        const userQuery=query(
            collection(db,'users'),
            where('id','==',postDetails.userId)
        )
        getDocs(userQuery).then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                setUserDetails(doc.data())
            })
        })
       
    },[postDetails.userId])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
            <h3 >Seller Information</h3>
            
          <p>{userDetails?.profileName}</p>
          <p>{userDetails?.phone}</p>
          
        </div>}
      </div>
    </div>
  );
}
export default View;
