import React from 'react'
import './Header.scss'

export const Header = ({ children, ...props }) => {
  return <div className="header">{children}</div>
}
