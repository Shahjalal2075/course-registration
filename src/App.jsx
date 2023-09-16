import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header'

function App() {

  const [carts, setCarts] = useState([]);
  const [credits,setCredits]=useState(0);
  const [price,setPrice]=useState(0);

  const handleAddToCart = course => {
    const newCart=[...carts, course];
    setCarts(newCart);
    
    const newCredit= parseInt(course.credit);
    setCredits(credits+(newCredit));

    const newPrice= parseInt(course.price);
    setPrice(price+(newPrice));
  }

  console.log(credits);

  return (
    <>
      <div className="container mx-auto font-inter">
        <Header></Header>
        <div className="flex flex-col lg:flex-row gap-1">
          <Courses 
            handleAddToCart={handleAddToCart}
          >
          </Courses>
          <Carts
            carts={carts}
            credits={credits}
            price={price}
          ></Carts>
        </div>
      </div>
    </>
  )
}

export default App
