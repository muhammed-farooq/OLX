import React from 'react'
import './FootBanner.css'
function FootBanner() {
  return (
    <div className='gg'>
    
    <img className='img' src="../../../Images/footerImg.webp" alt="" />
    <div>
        <h1>TRY THE OLX APP</h1>
        <p>Buy, sell and find just about anything using <br /> the app on your mobile.</p>
    </div>
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <img className='link' src="../../../Images/appstore.webp" alt="" />
        <img className='link' src="../../../Images/playstore.webp" alt="" />

    </div>
    </div>
  )
}

export default FootBanner
