import { useState } from 'react'

const Cart = ({ carts, setCarts }) => {
  const [checkoutDone, setCheckoutDone] = useState(false)

  const handleRemoveItem = (indexToRemove) => {
    const newCarts = [...carts]
    newCarts.splice(indexToRemove, 1)
    setCarts(newCarts)
  }

  const handleCheckout = () => {
    setCarts([])
    setCheckoutDone(true)
  }

let totalPrice = 0
for (let i = 0; i < carts.length; i++) {
  totalPrice = totalPrice + Number(carts[i].price || 0)
}

  return (
    <div className="mx-auto my-12 w-full max-w-300 px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-[#e6e8ef] bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-bold text-slate-800">Your Cart</h2>

        {carts.length === 0 ? (
          <div className="mt-6 rounded-xl bg-[#f8f8fb] p-6 text-center">
            <p className="text-lg font-semibold text-slate-700">
              {checkoutDone ? 'Checkout complete. Cart is empty.' : 'Cart is empty'}
            </p>
          </div>
        ) : (
          <>
            <div className="mt-6 space-y-3">
              {carts.map((cart, index) => (
                <div
                  key={`${cart.id}-${index}`}
                  className="flex items-center justify-between rounded-xl bg-[#f4f5f9] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <img src={cart.icon} alt={cart.name} className="h-9 w-9 rounded-lg bg-white p-1" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 md:text-base">{cart.name}</h3>
                      <p className="text-xs font-semibold text-slate-500 md:text-sm">${cart.price}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="text-sm font-bold text-pink-500 transition hover:text-pink-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#e8ebf2] pt-4">
              <span className="text-base font-semibold text-slate-500">Total</span>
              <span className="text-2xl font-bold text-slate-800">${totalPrice}</span>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-5 w-full rounded-full bg-linear-to-r from-[#4b35f6] via-[#7a2af8] to-[#ae0ff3] py-3 text-sm font-bold text-white transition hover:opacity-95"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
