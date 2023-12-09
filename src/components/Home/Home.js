import React from 'react'

import Header from '../Navbar/Header'
import Form from '../Form/Form'

function Home() {
  return (
    <div className='w-screen h-screen bg-slate-900'>
        <Header/>
            <div className='flex items-center justify-center my-[1.5rem] sm:my-20'>
         <Form/>
        </div>
    </div>
  )
}

export default Home