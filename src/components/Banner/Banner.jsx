import bannerImage from '../../assets/banner.png'
import playIcon from '../../assets/Play.png'

function Banner() {
  return (
    <section className="bg-[#f6f7fb]">
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#dfe4ff] px-4 py-2 text-sm font-semibold text-[#5f2bff]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#6d30ff] shadow-[0_0_0_4px_rgba(109,48,255,0.2)]" />
            New: AI-Powered Tools Available
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-[#222a3f] sm:text-5xl lg:text-[68px]">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="mt-6 max-w-xl text-[22px] leading-relaxed text-[#5a6c84]">
            Access premium AI tools, design assets, templates, and productivity software-all in one
            place. Start creating faster today.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="rounded-full bg-[#6e2bff] px-7 py-3 text-base font-bold text-white transition hover:bg-[#5a22dd]"
            >
              Explore Products
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#6e2bff] bg-white px-7 py-3 text-base font-bold text-[#6e2bff] transition hover:bg-[#6e2bff]/85 hover:text-white"
            >
              <img src={playIcon} alt="" className="h-4 w-4 " />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-125">
          <div className="overflow-hidden rounded-lg bg-white/50 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <img
              src={bannerImage}
              alt="Digital workflow tools"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
