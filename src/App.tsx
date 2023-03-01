import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Card from "./components/Card";
import Footer from './components/Footer'
import './App.css'

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer/>
    </div>
  )
}

export default App
