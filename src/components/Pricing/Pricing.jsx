import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started',
    price: '$0',
    period: '/Month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    buttonText: 'Get Started Free',
  },
  {
    name: 'Pro',
    description: 'Best for professionals',
    price: '$29',
    period: '/Month',
    tag: 'Most Popular',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    buttonText: 'Start Pro Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'For teams and businesses',
    price: '$99',
    period: '/Month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    buttonText: 'Contact Sales',
  },
]

function Pricing() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const cardClass = plan.featured
              ? 'relative rounded-3xl bg-indigo-600 p-8 text-white shadow-xl'
              : 'relative rounded-3xl border border-slate-100 bg-white p-8 text-slate-900 shadow-sm'

            const buttonClass = plan.featured
              ? 'rounded-full bg-white px-6 py-2 text-sm font-bold text-indigo-700'
              : 'rounded-full bg-indigo-600 px-6 py-2 text-sm font-bold text-white'

            const iconColor = plan.featured ? 'text-white' : 'text-green-500'

            return (
              <div key={plan.name} className={cardClass}>
                {plan.tag && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 px-4 py-1 text-xs font-bold text-amber-900">
                    {plan.tag}
                  </span>
                )}

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm opacity-85">{plan.description}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="pb-1 text-sm font-semibold opacity-80">{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={18} className={iconColor} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button type="button" className={`mt-8 ${buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
