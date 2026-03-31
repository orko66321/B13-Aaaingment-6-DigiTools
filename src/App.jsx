import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'
import HowItWorks from './components/HowItWorks/HowItWorks'

function App() {
  const [activeTab, setActiveTab] = useState('product')
  const [carts, setCarts] = useState([])

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <div className="mt-10 flex items-center justify-center">
        <div className="flex items-center gap-2 rounded-full bg-white p-2 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab('product')}
            className={`rounded-full px-6 py-2 text-sm font-semibold ${
              activeTab === 'product' ? 'bg-[#6d30ff] text-white' : 'text-slate-700'
            }`}
          >
            Products
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cart')}
            className={`rounded-full px-6 py-2 text-sm font-semibold ${
              activeTab === 'cart' ? 'bg-[#6d30ff] text-white' : 'text-slate-700'
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {activeTab === 'product' ? (
        <Products carts={carts} setCarts={setCarts}></Products>
      ) : (
        <Cart carts={carts} setCarts={setCarts}></Cart>
      )}
      <HowItWorks></HowItWorks>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}

export default App
