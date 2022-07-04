import React from 'react'

import s from './ButtonFeedback.module.scss'

type PropType = {
  images: string
  style: {}
  children: string
}

const ButtonFeedback: React.FC<PropType> = (props) => {
  return (
    <button className={s.btn} {...props}>
      <div className={s.imageWrapp}>
        <img src={props.images} alt="" />
      </div>
      {props.children}
    </button>
  )
}

export default ButtonFeedback
