import React, { useState,useContext, useEffect } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext, FirebaseContext } from '../../Store/firebase';



function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error, setError] = useState(null)
  const {auth}=useContext(FirebaseContext)
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  })
  const handleSignin=(e)=>{
    e.preventDefault()
    try{
      signInWithEmailAndPassword(auth,email,password).then((userData)=>{
        console.log(userData.user.uid);
        navigate('/')
      }).catch((err)=>{
        if (err.code === 'auth/invalid-email') {
          setError('Invalid User Credential');
        } else {
          setError(err.message);
        }
      });
  } catch (err) {
    setError(err.message);
  }
}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src= {Logo} alt='logo'></img>
        <form onSubmit={handleSignin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          {error && <p className="error"><br />{error}</p>}
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
