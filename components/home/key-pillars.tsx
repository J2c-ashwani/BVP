import { Shield, Users, TrendingUp, Award, Heart, Scale } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Good Governance',
    description: 'Transparent policies and ethical administration for all citizens'
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    description: 'Investment in education, skills, and career opportunities'
  },
  {
    icon: Scale,
    title: 'Anti-Corruption',
    description: 'Zero-tolerance for corruption with strict accountability measures'
  },
  {
    icon: TrendingUp,
    title: 'Development-First Policies',
    description: 'Focus on infrastructure, employment, and economic growth'
  },
  {
    icon: Award,
    title: 'Merit-Based Selection',
    description: 'BPSC-style exam system for fair and transparent candidate selection'
  },
  {
    icon: Heart,
    title: 'Social Justice & Equality',
    description: 'Equal opportunities and rights for all sections of society'
  },
]

export default function KeyPillars() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 text-balance">
            Key Pillars of BVP
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our six core principles guide every decision and policy we make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#0C2D72] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
