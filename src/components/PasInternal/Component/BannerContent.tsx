import React from 'react'
import './style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaCaretRight } from 'react-icons/fa'

interface HeaderContentPropsI {
  textColor: string
  leftH1Text?: string
  leftPText?: string
  leftButtonEnable?: boolean
  leftButtonText?: string
  leftButtonBackgroundColor?: string
  rightContent?: JSX.Element | JSX.Element[]
}

const HeaderContent = (props: HeaderContentPropsI) => {
  return (
    <Row className="banner-content">
      {/* Left Content */}
      <Col lg={2}></Col>
      <Col lg={4}>
        <h1>{props.leftH1Text}</h1>
        <p>{props.leftPText}</p>
        {props.leftButtonEnable && (
          <Button
            style={{
              backgroundColor: props.leftButtonBackgroundColor,
              padding: '0.375rem 1.75rem'
            }}
          >
            {props.leftButtonText}
            <span style={{ verticalAlign: 'text-bottom' }}>
              <FaCaretRight></FaCaretRight>
            </span>
          </Button>
        )}
      </Col>
      {/* Right Content */}
      <Col lg={4}>{props.rightContent}</Col>
      <Col lg={2}></Col>
    </Row>
  )
}

export default HeaderContent
