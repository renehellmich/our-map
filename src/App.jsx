import './App.css'
import CarList from './assets/components/carlist/CarList'
import cars from './assets/data/cars'

function App() {
//! App.jsx ist wie eine Verwaltung
  console.log(cars);
  return (
    //! Hier ist JSX Bereich, HTML ELEMENTE UND REACT Components
    <>
      <CarList cars={cars}/>
    </>
  )
}

export default App
