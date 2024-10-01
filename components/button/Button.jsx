import React from 'react'

import Style from './Button.module.css';

export default function Button({ btnText, handleClick }) {
  return (
    <div className={Style.box}>
      <div className={Style.button} onClick={() => handleClick()}>
        {btnText}
      </div>
    </div>
  )
}
