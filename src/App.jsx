import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header'

function App() {

  const [carts, setCarts] = useState([]);

  const handleAddToCart = course => {
    const newCart=[...carts, course];
    setCarts(newCart);
  }

  return (
    <>
      <div className="container mx-auto font-inter">
        <Header></Header>
        <div className="flex flex-col md:flex-row lg:flex-row gap-1">
          <Courses 
            handleAddToCart={handleAddToCart}
          >
          </Courses>
          <Carts
            carts={carts}
          ></Carts>
        </div>
      </div>
    </>
  )
}

export default App
