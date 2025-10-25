import { useState } from 'react'
import Nav from './component/nav.jsx'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
    <Nav></Nav>
   </div>
  )
}

export default App
