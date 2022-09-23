import React from 'react'
import cn from 'classnames'

import styles from './indicator.module.scss'

export default function Indicator({size='medium',currency='֏',balance=100,corners='normal'}) {
    const mainCn = cn(
        styles.indicator,
        styles[size],
        styles[corners]
    )
  return (
    <div className={mainCn}>
        <p>{balance}</p>
        <p>{currency}</p>
    </div>
  )
}
