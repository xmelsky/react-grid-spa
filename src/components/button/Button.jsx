import React from 'react'

import './Button.scss'

export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}
