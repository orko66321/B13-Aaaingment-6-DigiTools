const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

function Stats() {
  return (
    <section className="w-full bg-linear-to-r from-[#4b35f6] via-[#7a2af8] to-[#ae0ff3]">
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 px-4 py-10 sm:px-6 md:grid-cols-3 md:py-14 lg:px-8">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`text-center ${
              index !== stats.length - 1
                ? 'border-b border-white/20 pb-8 md:border-b-0 md:border-r md:pb-0'
                : ''
            } ${index !== 0 ? 'pt-8 md:pt-0' : ''}`}
          >
            <h3 className="text-5xl font-extrabold tracking-tight text-white">{item.value}</h3>
            <p className="mt-3 text-xl font-semibold text-white/85 sm:text-2xl">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
