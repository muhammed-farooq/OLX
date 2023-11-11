import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { addDoc, collection } from 'firebase/firestore';
import { AuthContext, FirebaseContext } from '../../Store/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const navigate = useNavigate()
    const { db, storage } = useContext(FirebaseContext)
    const { user } = useContext(AuthContext)
    const [name, setname] = useState('')
    const [cate, setCate] = useState('')
    const [price, setPrice] = useState('')
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [img, setImg] = useState(null)
    const date = new Date().toDateString()
    const handleSubmit = () => {
        const storageRef = ref(storage, 'Images/' + img.name)
        uploadBytes(storageRef, img).then((reference) => {
            getDownloadURL(reference.ref).then((url) => {
                addDoc(collection(db, 'products'), {
                    name,
                    category: cate,
                    price,
                    url,
                    userId: user.uid,
                    createdAt: date
                }).then(() => {
                    setUploadSuccess(true);
                    navigate('/')
                })
            })
        })
    }

    return (
        <Fragment>
            <Header />
            <>
                <div className="centerDiv">
                    <label htmlFor="fname">Name</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        name="Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                    <br />
                    <label htmlFor="fname">Category</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        id="fname"
                        name="category"
                        value={cate}
                        onChange={(e) => setCate(e.target.value)}
                    />
                    <br />
                    <label htmlFor="fname">Price</label>
                    <br />
                    <input className="input" type="number" id="fname" value={price} onChange={(e) => setPrice(e.target.value)} name="Price" />
                    <br />
                    <br />
                    {img && <img alt="Posts" width="100px" height="100px" src={img ? URL.createObjectURL(img) : null}></img>}
                    <br />
                    <input type="file" onChange={(e) => {
                        setImg(e.target.files[0])
                    }} />
                    <br />
                    {uploadSuccess ?
                        <div><br /><div className="success-message">Upload successful!</div>
                            <div className="homebtn" onClick={() => { navigate('/') }}>Go Home</div>
                        </div>
                        :
                        <button onClick={handleSubmit} className="uploadBtn">Submit</button>
                    }
                </div>
            </>
        </Fragment>
    );
};

export default Create;
