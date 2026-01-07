import React, { type ReactNode } from 'react'
import styles from '../header.module.css'

type headerListItemProps = {
    children: ReactNode
}

// tipar com props seria igual tipar desta forma React.HTMLElementAtributs<HTMLULelement> 
function HeaderListItem( {children}: headerListItemProps) {
  return (
    <li className={styles.menuitem}>{children}</li>
  )
}

export default HeaderListItem