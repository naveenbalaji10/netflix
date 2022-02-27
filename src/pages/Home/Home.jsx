import React from 'react'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/list'

import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'

const Home = () => {

   

  return (
    <div className='home'>
      <Navbar/>    
       <Featured type="movie"/>
       <List/>
       <List/>
       <List/>
       <List/>
       <List/>
       
    </div>
  )
}

export default Home