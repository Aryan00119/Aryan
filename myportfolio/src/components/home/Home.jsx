import React from 'react'
import Header from './Header'
import MyProfile from './MyProfile'
import Crousel from "../../utills/common/Crousel"
import {images} from "../../utills/constants"
import Footer from '../../utills/common/Footer'
import Progress from './Progress'

const Home = () => {
  return (
    <div className='container' style={{marginTop:"90px"}}>
      <Header/>
      <MyProfile/>
      <Progress></Progress>
      <Crousel images={images} imagesPerRow={2}/>
      <Footer/>
    </div>
  )
}

export default Home
