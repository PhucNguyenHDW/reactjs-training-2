import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './style.css'
import { useNavigate } from 'react-router-dom'

interface PasNavBarI {
  navTextColor: string
  navBackgroundColor: string
}

const PasNavBar = (props: PasNavBarI) => {
  const navigate = useNavigate()
  return (
    <div
      className="header-nav"
      style={{
        color: props.navTextColor,
        backgroundColor: props.navBackgroundColor
      }}
    >
      <div className="pas-logo">
        <h4 onClick={() => navigate('/pas-internal/landing-page')}>
          ADVISOR SOLUTIONS
        </h4>
        <p>by Purpose</p>
      </div>
      <div className="pas-nav">
        <Nav
          onSelect={(selectedKey) => {
            console.log('selectedKey', selectedKey)
          }}
        >
          <Nav.Item>
            <Nav.Link href="advisors" eventKey="advisors">
              Advisors
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="our-platform" eventKey="our-platform">
              Our Platform
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="about-us" eventKey="about-us">
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="advisor-resources" eventKey="advisor-resources">
              Advisor Resources
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="contact-us" eventKey="contact-us">
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}

export default PasNavBar
