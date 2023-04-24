import React from 'react'
import { Outlet } from 'react-router-dom'
import './PASContainer.css'

const PASContainer = () => {
  return (
    <div className="pas-container">
      <Outlet></Outlet>
    </div>
  )
}

export default PASContainer
