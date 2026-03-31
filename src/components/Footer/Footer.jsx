import { Globe, MessageCircle, Send } from 'lucide-react'

const productLinks = ['Features', 'Pricing', 'Templates', 'Integrations']
const companyLinks = ['About', 'Blog', 'Careers', 'Press']
const resourceLinks = ['Documentation', 'Help Center', 'Community', 'Contact']
const policyLinks = ['Privacy Policy', 'Terms of Service', 'Cookies']

function Footer() {
  return (
    <footer className="bg-[#0a1329] text-white">
      <div className="h-20 w-full bg-gradient-to-r from-[#4b35f6] via-[#7a2af8] to-[#ae0ff3]" />

      <div className="border border-[#12d8d2] border-t-2">
        <div className="mx-auto w-full max-w-300 px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr]">
            <div className="max-w-sm">
              <h2 className="text-5xl font-extrabold tracking-tight text-white">DigiTools</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Premium digital tools for creators, professionals, and businesses. Work smarter
                with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Product</h3>
              <ul className="mt-4 space-y-3 text-lg text-white/85">
                {productLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Company</h3>
              <ul className="mt-4 space-y-3 text-lg text-white/85">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Resources</h3>
              <ul className="mt-4 space-y-3 text-lg text-white/85">
                {resourceLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Social Links</h3>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Community"
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0a1329] transition hover:scale-105"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Website"
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0a1329] transition hover:scale-105"
                >
                  <Globe size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Updates"
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0a1329] transition hover:scale-105"
                >
                  <Send size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-7 text-base text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Digitools. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-8">
              {policyLinks.map((item) => (
                <a key={item} href="#" className="transition hover:text-white/85">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
