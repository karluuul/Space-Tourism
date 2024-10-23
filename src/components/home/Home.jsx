import React from 'react'
import data from '../../data/data.json'
import './Home.css'
import bgHome from '../../assets/home/background-home-desktop.jpg';

const Home = () => {
  const homeData = data.home;

  return (
    <div className='main-content'>
      <img src={bgHome} className='bgHome'></img>
        <div className='container'>
          <div className='text-container'> 
            <div className='text-header'>{homeData.header}</div>
            <div className='text-subheader'>{homeData.subHeader}</div>
            <div className='text-content'>{homeData.content}</div>
          </div>
        </div>
    </div>
  )
}

export default Home
