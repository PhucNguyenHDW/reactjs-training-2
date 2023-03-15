import React from 'react'
import './style.css'
import BannerContent from './BannerContent'
import compassImg from './../../../../src/compass.png'

const Banner = () => {
  return (
    <div className="banner">
      <BannerContent
        textColor="black"
        leftH1Text="Take control of your advisor practice"
        leftPText={`We're here to help financial advisors like you get the freedom, flexibility, and control you need to better serve your clients.`}
        leftButtonEnable={true}
        leftButtonBackgroundColor="#E25052"
        leftButtonText="Get Started"
        rightContent={
          <div className="banner-right-content">
            <img src={compassImg} width={300}></img>
          </div>
        }
      ></BannerContent>
    </div>
  )
}

export default Banner
