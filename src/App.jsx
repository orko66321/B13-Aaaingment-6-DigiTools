import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar/Navbar'
import Stats from './components/Stats/Stats'

function App() {
  
  
  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar ></Navbar>
      <Banner></Banner>
      <Stats></Stats>
    </div>
  )
}

export default App
