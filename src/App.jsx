import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderList from './headerList.jsx'
import ItemList from './ItemList.jsx'

function App() {
  

  return (
    <>
<div className="container py-4">
  <HeaderList/>
<div className="item-list mb-5 text-center">
<ItemList/> 
  </div>
</div>

    </>
  )
}

export default App
