import React, { useContext } from 'react'
import { Context } from '../../context'
import { Button } from '../button'
import './Card.scss'

export const Card = ({ children, id }) => {
  const { removeCard } = useContext(Context)
  return (
    <div className="card">
      <Button
        className="card__button button button_remove"
        onClick={() => removeCard(id)}
      >
        <i className="icon-trash-empty"></i>
      </Button>
      <p className="card__text">{children}</p>
    </div>
  )
}
