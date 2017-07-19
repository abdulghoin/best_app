// import Packages
import React from 'react'

// import Components
import NavHeader from './NavHeader'

const LayOut =({children})=>{
  return(
    <section id='LayOut'>
      <NavHeader />
      {children}
    </section>
  )
}

export default LayOut
