import { useState } from 'react'
import { Menu, ShoppingCart, X } from 'lucide-react'

const navItems = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

function Navbar({carts}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-y-2  bg-[#f6f7fb]">
      <nav className="mx-auto flex w-full max-w-300 items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-3xl font-extrabold tracking-tight text-[#6d30ff] sm:text-4xl"
        >
          DigiTools
        </a>

        <ul className="hidden items-center gap-8 text-[15px] font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="transition-colors duration-200 hover:text-[#6d30ff]">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            className="relative rounded-full p-1 text-slate-700 transition-colors duration-200 hover:text-[#6d30ff]"
            aria-label="Open cart"
          >
            <ShoppingCart size={18} strokeWidth={2.2} />
            <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[#6d30ff] px-1 text-[11px] font-bold leading-none text-white">
              {carts?.length ?? 0}
            </span>
          </button>

          <a href="#" className="font-semibold text-slate-700 transition-colors hover:text-[#6d30ff]">
            Login
          </a>

          <button
            type="button"
            className="rounded-full bg-[#7c3aff] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#6928f5]"
          >
            Get Started
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-700 transition-colors hover:text-[#6d30ff] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#d7dfeb] bg-white lg:hidden">
          <ul className="mx-auto flex w-full max-w-300 flex-col gap-4 px-4 py-5 sm:px-6">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="block text-[15px] font-semibold text-slate-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="mx-auto flex w-full max-w-300 flex-col gap-4 px-4 pb-5 sm:px-6">
            <a href="#" className="text-[15px] font-semibold text-slate-700">
              Login
            </a>

            <button
              type="button"
              className="w-fit rounded-full bg-[#7c3aff] px-6 py-2.5 text-sm font-bold text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
