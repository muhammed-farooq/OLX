import React from 'react'
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Posts from "../Components/Posts/Posts";
import FootBanner from "../Components/FootBanner/FootBanner";
import Footer from "../Components/Footer/Footer";
function Home() {
  return (
    <div>
      <Header />
      <Banner/>
      <Posts />
      <FootBanner/>
      <Footer />
    </div>
  )
}

export default Home
