import React from 'react'
import cn from 'classnames'

import styles from './input.module.scss'

export default function Input( {size='medium',text='placeholder',corners='normal',color='white'} ) {
    const mainCn = cn(
        styles.input,
        styles[size],
        styles[corners],
        styles[color]
    )
  return (
        <input placeholder={text} className={mainCn} type="text" name="" id="" />
  )
}
