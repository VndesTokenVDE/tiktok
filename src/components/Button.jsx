import React from 'react'

const Button = ({ styles, text }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-button font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px] ${styles}`}>
      {text}
    </button>
  )
}

export default Button