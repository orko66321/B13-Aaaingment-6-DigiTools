import { PackageSearch, Rocket, UserPlus } from 'lucide-react'

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds.',
    Icon: UserPlus,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Pick the tools that match your needs.',
    Icon: PackageSearch,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Use your tools right away and boost productivity.',
    Icon: Rocket,
    iconColor: 'text-fuchsia-600',
    bgColor: 'bg-fuchsia-50',
  },
]

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">Get Started In 3 Steps</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            Start using premium digital tools in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm"
            >
              <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                {step.id}
              </span>

              <div
                className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${step.bgColor}`}
              >
                <step.Icon size={32} className={step.iconColor} />
              </div>

              <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
              <p className="mt-3 text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
