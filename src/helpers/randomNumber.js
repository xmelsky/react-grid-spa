export const setRange = (min = 0, max = 100) => {
  if (max > 100)
    throw new Error(`Error: Maximum 100 cards is allowed, but provided ${max}`)
  if (min > max) throw new Error('Error: Minimum is greater then maximum')
  return [...Array(max).keys(), max === 100 ? 100 : max].slice(min)
}

export const getRandomNumber = (max) => {
  if (max === 0) return null
  return Math.floor(Math.random() * max)
}
