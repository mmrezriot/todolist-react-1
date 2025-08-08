import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderList from './headerList.jsx'
import ItemList from './ItemList.jsx'
import { itemContex } from './context.jsx'

function App() {
  
  
  const [taskItem , setTaskItem] = useState([])
  

  return (
    <>
    <itemContex.Provider value={
     { taskItem,
      setTaskItem}
    }>
<div className="container py-4">
  <HeaderList/>
<div className="item-list mb-5 text-center">
<ItemList/> 
  </div>
</div>
</itemContex.Provider>

    </>
  )
}

export default App
