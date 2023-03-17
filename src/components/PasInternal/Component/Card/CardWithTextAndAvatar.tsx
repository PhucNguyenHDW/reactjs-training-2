import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaQuoteLeft, FaQuoteRight, FaCaretRight } from 'react-icons/fa'
import './style.css'

interface CardWithTextAndAvatarI {
  cardDescription?: string
  avatarSrc?: string
  avatarName?: string
  avatarDescription?: string
  buttonText?: string
}

const CardWithTextAndAvatar = (props: CardWithTextAndAvatarI) => {
  return (
    <div className="card-with-text-avatar">
      <Card>
        <Card.Body>
          <div className="card-text-div">
            <Card.Text className="text-left double-quote-style">
              <FaQuoteLeft></FaQuoteLeft>
            </Card.Text>
            <div className="card-description-div">
              <Card.Text className="text-center">
                {props.cardDescription}
              </Card.Text>
            </div>
            <Card.Text className="text-right double-quote-style">
              <FaQuoteRight></FaQuoteRight>
            </Card.Text>
          </div>
          <div className="card-avatar-div text-center mb-2p">
            <Card.Img
              className="card-avatar-circle mb-1p"
              variant="top"
              src={props.avatarSrc}
            />
            <Card.Text
              className="text-center avatar-name"
              style={{ margin: 0 }}
            >
              <strong>{props.avatarName}</strong>
            </Card.Text>
            <Card.Text className="text-center avatar-position">
              <span>{props.avatarDescription}</span>
            </Card.Text>
            <div className="text-center mb-1p">
              <Button
                style={{
                  backgroundColor: '#76A5D7'
                }}
                className="base-btn"
              >
                <span>{props.buttonText}</span>
                <span>
                  <FaCaretRight></FaCaretRight>
                </span>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardWithTextAndAvatar
