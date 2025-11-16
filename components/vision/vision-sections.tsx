import { TrendingUp, Shield, BookOpen, Heart, Briefcase, Building2 } from 'lucide-react'

const visionAreas = [
  {
    icon: TrendingUp,
    title: 'Development for All',
    description: 'Our goal is fast, transparent, and corruption-free development across all districts. We aim to bridge the gap between urban and rural areas through targeted infrastructure projects, improved connectivity, and equitable resource distribution.',
  },
  {
    icon: Shield,
    title: 'Zero-Corruption Governance',
    description: 'We promote honest politics through strict internal discipline and candidate screening. Every decision is transparent, accountable, and made in the interest of Bihar\'s citizens. We maintain zero tolerance for any form of corruption or misuse of public resources.',
  },
  {
    icon: BookOpen,
    title: 'Strong Education & Skill Mission',
    description: 'We aim to empower youth with world-class education and job-oriented skills. Our focus includes improving school infrastructure, digital literacy, vocational training, and creating pathways for higher education and international exposure.',
  },
  {
    icon: Heart,
    title: 'Healthcare for All',
    description: 'Quality healthcare is a fundamental right. We commit to establishing well-equipped hospitals, primary health centers in every block, and ensuring affordable medical services for all sections of society.',
  },
  {
    icon: Building2,
    title: 'Modern Infrastructure',
    description: 'From roads and railways to water supply and electricity, we will invest in robust infrastructure that connects Bihar to the world. Smart cities and urban development will be planned with sustainability in mind.',
  },
  {
    icon: Briefcase,
    title: 'Job Creation & Economic Growth',
    description: 'We will attract industries, support startups, and create millions of quality jobs for Bihari youth. Our focus is on manufacturing, technology, agriculture, and tourism sectors to boost economic growth.',
  },
]

export default function VisionSections() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="bg-[#F5F7FA] p-8 rounded-xl hover:shadow-lg transition-shadow fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-[#0C2D72] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-gradient-to-r from-[#0C2D72] to-[#1a4fa3] rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Our Commitment to Bihar
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Bihar Vikas Party is committed to transforming Bihar into a state that leads India in transparency, good governance, and equitable development. By combining merit-based leadership with a citizen-centric approach, we will create a Bihar where every citizen has opportunities to succeed and contribute to the state's progress.
          </p>
        </div>
      </div>
    </section>
  )
}
