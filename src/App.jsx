import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [carts, setCarts] = useState([]);
  const [credits,setCredits]=useState(0);
  const [price,setPrice]=useState(0);

  const handleAddToCart = course => {

    const newCredit= parseInt(course.credit);
    const isCart = carts.some(cart=>cart.id ===course.id);

      if((credits+(newCredit)<=20) && !isCart)
      {
        setCredits(credits+(newCredit));
        
        const newCart=[...carts, course];
        setCarts(newCart);

        const newPrice= parseInt(course.price);
        setPrice(price+(newPrice));
      }
      else if(isCart)
      {
        toast("You Allready Add This Course.");
      }
      else{
        toast("You cannot exceed 20 credit hours.");
      }

  }

  return (
    <>
      <div className="container mx-auto font-inter">
        <Header></Header>
        <div className="flex flex-col lg:flex-row gap-1">
          <Courses 
            handleAddToCart={handleAddToCart}
          >
          </Courses>
          <ToastContainer></ToastContainer>
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
