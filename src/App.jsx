import './App.css'
import Chart from './components/Chart/Chart'
import Courses from './components/Courses/Courses'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className="container mx-auto font-inter">
        <Header></Header>
        <div className="flex flex-col md:flex-row lg:flex-row gap-1">
          <Courses></Courses>
          <Chart></Chart>
        </div>
      </div>
    </>
  )
}

export default App
