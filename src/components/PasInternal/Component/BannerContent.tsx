import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'
import { FaCaretRight } from 'react-icons/fa'

interface HeaderContentPropsI {
  textColor: string
  leftH1Text?: string
  leftPText?: string
  leftBelowButtonEnable?: boolean
  leftBelowButtonText?: string
  leftBelowButtonBackgroundColor?: string
  rightContent?: JSX.Element | JSX.Element[]
  leftUpperButtonEnable?: boolean
  leftUpperButtonText?: string
  leftUpperButtonBackgroundColor?: string
}

const HeaderContent = (props: HeaderContentPropsI) => {
  return (
    <div className="container">
      <div className="left-content">
        <p style={{ fontSize: '54px', lineHeight: '60px' }}>
          {props.leftH1Text}
        </p>
        {props.leftUpperButtonEnable && (
          <Button
            style={{
              backgroundColor: props.leftUpperButtonBackgroundColor,
              padding: '0.7rem 1rem 0.7rem 0.7rem'
            }}
          >
            <span>{props.leftUpperButtonText}</span>
            <span
              style={{
                verticalAlign: 'text-bottom',
                paddingLeft: '3rem'
              }}
            >
              <FaCaretRight></FaCaretRight>
            </span>
          </Button>
        )}
        <p style={{ padding: '1rem 0rem' }}>{props.leftPText}</p>
        {props.leftBelowButtonEnable && (
          <Button
            style={{
              backgroundColor: props.leftBelowButtonBackgroundColor,
              padding: '0.7rem 1rem 0.7rem 0.7rem'
            }}
          >
            <span>{props.leftBelowButtonText}</span>
            <span style={{ verticalAlign: 'text-bottom', paddingLeft: '3rem' }}>
              <FaCaretRight></FaCaretRight>
            </span>
          </Button>
        )}
      </div>
      <div className="right-content">{props.rightContent}</div>
    </div>
    // <Row className="banner-content">
    //   {/* Left Content */}
    //   <Col lg={2}></Col>
    //   <Col lg={4}>
    //     <p style={{ fontSize: '54px', lineHeight: '60px' }}>
    //       {props.leftH1Text}
    //     </p>
    //     <Row>
    //       <Col lg={8} style={{ padding: 0 }}>
    //         {props.leftUpperButtonEnable && (
    //           <Button
    //             style={{
    //               backgroundColor: props.leftUpperButtonBackgroundColor,
    //               padding: '0.7rem 1rem 0.7rem 0.7rem'
    //             }}
    //           >
    //             <span>{props.leftUpperButtonText}</span>
    //             <span
    //               style={{
    //                 verticalAlign: 'text-bottom',
    //                 paddingLeft: '3rem'
    //               }}
    //             >
    //               <FaCaretRight></FaCaretRight>
    //             </span>
    //           </Button>
    //         )}
    //         <p style={{ padding: '1rem 0rem' }}>{props.leftPText}</p>
    //       </Col>
    //       <Col lg={4}></Col>
    //     </Row>
    //     {props.leftBelowButtonEnable && (
    //       <Button
    //         style={{
    //           backgroundColor: props.leftBelowButtonBackgroundColor,
    //           padding: '0.7rem 1rem 0.7rem 0.7rem'
    //         }}
    //       >
    //         <span>{props.leftBelowButtonText}</span>
    //         <span style={{ verticalAlign: 'text-bottom', paddingLeft: '3rem' }}>
    //           <FaCaretRight></FaCaretRight>
    //         </span>
    //       </Button>
    //     )}
    //   </Col>
    //   {/* Right Content */}
    //   <Col lg={4}>{props.rightContent}</Col>
    //   <Col lg={2}></Col>
    // </Row>
  )
}

export default HeaderContent
