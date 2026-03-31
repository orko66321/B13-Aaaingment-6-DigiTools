import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar/Navbar'
import Stats from './components/Stats/Stats'

function App() {
  
  
  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar ></Navbar>
      <Banner></Banner>
      <Stats></Stats>
       <div className='flex justify-center items-center  mt-10'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box theme-tabs rounded-3xl bg-white px-2 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab rounded-2xl px-7 text-base font-semibold"
                    aria-label="Products"
                    onClick={()=>setActiveTab('product')}
                    defaultChecked
                />
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab rounded-2xl px-7 text-base font-semibold"
                    aria-label={`Cart (${carts.length})`}
                    onClick={()=>setActiveTab('cart')}
                />
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default App
