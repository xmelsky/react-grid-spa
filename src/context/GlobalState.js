import React, { useEffect, useState, useRef } from 'react'
import { Context } from './app-context'
import { getRandomID, setRange, getRandomNumber } from '../helpers'

export const GlobalState = (props) => {
  const [cards, setCards] = useState([])

  const range = useRef()

  useEffect(() => {
    // initial card numbers range, eg. setRange(20, 25)
    range.current = setRange()
  }, [])

  const addCard = () => {
    if (!range.current.length) return
    const id = getRandomID()

    const card_number = getRandomNumber(range.current.length)
    const card = {
      id,
      card_number: range.current[card_number],
    }
    range.current = [
      ...range.current.slice(0, card_number),
      ...range.current.slice(card_number + 1),
    ]
    const newSetOfCards = [...cards, card]
    setCards(newSetOfCards)
  }

  const removeCard = (id) => {
    const toBeRemoved = cards.find((el) => el.id === id)
    const randomPosition = getRandomNumber(range.current.length)
    range.current = [
      ...range.current.slice(0, randomPosition),
      toBeRemoved.card_number,
      ...range.current.slice(randomPosition),
    ]

    const newSetOfCards = [...cards.filter((el) => el.id !== id)]
    setCards(newSetOfCards)
  }

  const sortCards = () => {
    setCards([...cards].sort((a, b) => a.card_number - b.card_number))
  }

  return (
    <Context.Provider
      value={{
        cards,
        setCards,
        addCard,
        removeCard,
        sortCards,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
