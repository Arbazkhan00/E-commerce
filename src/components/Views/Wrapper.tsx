import React, { PropsWithChildren } from 'react'

function Wrapper({children}:PropsWithChildren) {
  return (
    <div className='min-h-screen'>{children}</div>
  )
}

export default Wrapper