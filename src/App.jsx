import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar/Navbar'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'

function App() {
  const [activeTab, setActiveTab] = useState('product')
  const [carts, setCarts] = useState([])

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <div className="mt-10 flex items-center justify-center">
        <div className="tabs tabs-box theme-tabs rounded-3xl bg-white px-2 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-2xl px-7 text-base font-semibold"
            aria-label="Products"
            checked={activeTab === 'product'}
            onChange={() => setActiveTab('product')}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-2xl px-7 text-base font-semibold"
            aria-label={`Cart (${carts.length})`}
            checked={activeTab === 'cart'}
            onChange={() => setActiveTab('cart')}
          />
        </div>
      </div>

      {activeTab === 'product' ? (
        <Products carts={carts} setCarts={setCarts}></Products>
      ) : (
        <Cart carts={carts} setCarts={setCarts}></Cart>
      )}
      <Footer></Footer>
    </div>
  )
}

export default App
