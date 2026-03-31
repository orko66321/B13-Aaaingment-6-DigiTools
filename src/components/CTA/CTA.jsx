function CTA() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-indigo-600 p-10 text-center text-white shadow-xl md:p-16">
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-indigo-100 md:text-lg">
            Join thousands of professionals using DigiTools to work smarter.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-700"
            >
              Explore Products
            </button>
            <button
              type="button"
              className="rounded-full border border-white px-8 py-3 text-sm font-bold text-white"
            >
              View Pricing
            </button>
          </div>

          <p className="mt-6 text-sm font-semibold text-indigo-200">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
