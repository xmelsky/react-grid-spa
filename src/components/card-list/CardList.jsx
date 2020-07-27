import React, { useContext } from 'react'
import { Context } from '../../context'
import { Card } from '../card'

import './CardList.scss'

export const CardList = () => {
  const { cards } = useContext(Context)

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} id={card.id}>
          {card.card_number}
        </Card>
      ))}
    </div>
  )
}
