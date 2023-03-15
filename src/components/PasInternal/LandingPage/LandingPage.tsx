import React from 'react'
import Banner from '../Component/Banner'
import PasNavBar from '../Component/PasNavBar'
// import Card from 'react-bootstrap/Card'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <PasNavBar navTextColor="black" navBackgroundColor="white"></PasNavBar>
      <div className="below-nav">
        <Banner></Banner>
        <div className="journey-div">
          <div className="journey-text-div">
            <h1 className="text-center" style={{ color: 'white' }}>
              They made the journey.
            </h1>
            <h1 className="text-center" style={{ color: 'white' }}>
              So can you.
            </h1>
          </div>
        </div>
        <div className="journey-card"></div>
      </div>
    </div>
  )
}

export default LandingPage
