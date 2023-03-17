import React from 'react'
import Banner from '../Component/Banner'
import PasNavBar from '../Component/PasNavBar'
import CardWithTextAndAvatar from '../Component/Card/CardWithTextAndAvatar'
import { LandingPageText } from '../TextString/landingPage'
import './style.css'
import { FaStarOfLife } from 'react-icons/fa'
import BannerContent from '../Component/BannerContent'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-nav">
        <PasNavBar
          navTextColor="black"
          navBackgroundColor="#dee2ea"
        ></PasNavBar>
      </div>
      <div className="banner" style={{ backgroundColor: '#DEE2EA' }}>
        <Banner></Banner>
        <div className="journey-div">
          <div className="vertical-line-middle">&nbsp;</div>
          <div className="icon-middle">
            <FaStarOfLife></FaStarOfLife>
          </div>
          <div className="journey-text-div">
            <p
              className="text-center"
              style={{ color: 'white', fontSize: '54px', lineHeight: '60px' }}
            >
              They made the journey.
              <br />
              So can you.
            </p>
          </div>
          <div className="journey-card">
            <CardWithTextAndAvatar
              cardDescription={LandingPageText.JOURNEY_TEXT_1}
              avatarSrc={`https://placehold.co/70x70`}
              avatarName="LORENZO PEDERZANI"
              avatarDescription="CEO @ Westmount Wealth Management"
              buttonText="Lorenzo’s story"
            ></CardWithTextAndAvatar>
            <CardWithTextAndAvatar
              cardDescription={LandingPageText.JOURNEY_TEXT_2}
              avatarSrc={`https://placehold.co/70x70`}
              avatarName="MICHAEL BURCH"
              avatarDescription="Senior Advisor @ Family Wealth Advisory Group"
              buttonText="Michael’s story"
            ></CardWithTextAndAvatar>
            <CardWithTextAndAvatar
              cardDescription={LandingPageText.JOURNEY_TEXT_3}
              avatarSrc={`https://placehold.co/70x70`}
              avatarName="MATTHEW EVANS"
              avatarDescription="CIO @ Westmount Wealth Management"
              buttonText="Matthew’s story"
            ></CardWithTextAndAvatar>
          </div>
        </div>
        <div
          className="legacy-div"
          style={{
            backgroundColor: 'papayawhip',
            paddingTop: '15rem'
          }}
        >
          <BannerContent
            textColor="black"
            leftH1Text="Own your equity. Build your legacy."
            leftPText={`It’s not easy to decide whether you should leave your firm and go independent. As a true partner, we’ll navigate your challenges and help you reach new heights by providing access to our holistic personalized coaching from industry experts and our modern wealth management platform. `}
            leftUpperButtonEnable={true}
            leftUpperButtonBackgroundColor="#76A5D7"
            leftUpperButtonText="Discover our platform"
          ></BannerContent>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
