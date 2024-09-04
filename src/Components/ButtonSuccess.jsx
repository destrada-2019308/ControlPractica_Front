import React from 'react'

export const ButtonSuccess = ({ action, text }) => {
  return (
    <button className='' onClick={action}>
        Agregar { text }
    </button>       
  )
}
