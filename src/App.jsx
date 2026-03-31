import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
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
        <div className="container mx-auto my-12 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-800">Your Cart</h2>
          {carts.length === 0 ? (
            <p className="mt-4 text-gray-500">No products added yet.</p>
          ) : (
            <div className="mt-6 space-y-3">
              {carts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-4"
                >
                  <span className="font-semibold text-slate-700">{item.name}</span>
                  <span className="font-bold text-slate-900">${item.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <Footer></Footer>
    </div>
  )
}

export default App
