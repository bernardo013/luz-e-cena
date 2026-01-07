import React, { type ReactNode } from 'react'

type headerProps = {
  children: ReactNode
}
// tipar com props seria igual tipar desta forma React.HTMLElementAtributs<HTMLULelement> 
function HeaderList( {children}: headerProps ){
  return (
    <ul>{children}</ul>
  )
}

export default HeaderList