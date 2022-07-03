import React from 'react'

import s from './ButtonFeedback.module.scss'

type PropType = {
  images: HTMLImageElement
  style: {}
  children: string
}

const ButtonFeedback: React.FC<PropType> = (props: any) => {
  console.log(props.children)

  return (
    <button className={s.btn} {...props}>
      <div><img src={props.images} alt="" /></div>
      {props.children}
    </button>
  )
}

export default ButtonFeedback
