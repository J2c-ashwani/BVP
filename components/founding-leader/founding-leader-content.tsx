'use client'

import { Heart, Target, Shield, TrendingUp, AlertCircle } from 'lucide-react'

export default function FoundingLeaderContent() {
  return (
    <div className="bg-white">
      
      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
            About the Founding Leader
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed text-lg mb-6">
              Ashwani Kumar is the visionary behind Bihar Vikas Party (BVP) — a movement built on 
              transparency, integrity, and development-first governance.
            </p>
            <p className="text-foreground leading-relaxed text-lg mb-6">
              He believes that true leadership comes from service, responsibility, and competence, 
              not from money, connections, or influence.
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              With this philosophy, he introduced <strong className="text-primary">India's first 
              UPSC-style merit-based candidate selection system</strong>, aiming to bring honest, 
              capable, and educated individuals into politics.
            </p>
          </div>
        </div>
      </section>

      {/* Why BVP Founded */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
            Why Ashwani Kumar Founded BVP
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: '⚠️', title: 'Outdated political practices', color: 'red' },
              { icon: '🔒', title: 'Lack of transparency', color: 'orange' },
              { icon: '💰', title: 'Influence of money & muscle power', color: 'yellow' },
              { icon: '👥', title: 'Poor leadership pipeline', color: 'blue' },
              { icon: '🎯', title: 'Missing long-term vision', color: 'purple' },
            ].map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-red-400 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{issue.icon}</span>
                  <p className="text-lg font-semibold text-foreground">{issue.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Bihar Vikas Party was formed to change this</h3>
            <p className="text-lg mb-6">To build a new, modern political ecosystem where:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-secondary" />
                <span className="font-semibold">Merit wins</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-secondary" />
                <span className="font-semibold">Integrity leads</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-secondary" />
                <span className="font-semibold">Development is the priority</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-secondary" />
                <span className="font-semibold">Vision drives action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Bihar */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
            Vision for Bihar
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏗️', title: 'World-class infrastructure' },
              { icon: '💼', title: 'Employment for every youth' },
              { icon: '🔍', title: 'Transparent governance' },
              { icon: '🚫', title: 'Zero tolerance for corruption' },
              { icon: '🛡️', title: 'Safe, modern, progressive society' },
              { icon: '📚', title: 'Strong education & healthcare' },
              { icon: '🌾', title: 'Empowered villages and districts' },
              { icon: '🎓', title: 'Merit-based leadership, not dynasty' },
            ].map((vision, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border-2 border-border hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{vision.icon}</span>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {vision.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
            Guiding Principles
          </h2>
          
          <div className="space-y-6">
            {[
              { icon: '✨', title: 'Truth & Integrity', color: 'blue' },
              { icon: '🎯', title: 'Merit & Competence', color: 'orange' },
              { icon: '🤝', title: 'Service Before Self', color: 'green' },
              { icon: '🏛️', title: 'Development Before Politics', color: 'purple' },
              { icon: '❤️', title: 'People First, Always', color: 'red' },
            ].map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{principle.icon}</span>
                  <h3 className="text-2xl font-bold text-primary">{principle.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Ashwani Kumar*/}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Message from Ashwani Kumar
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 sm:p-12">
            <div className="text-6xl text-secondary mb-6">"</div>
            <blockquote className="space-y-6 text-lg leading-relaxed">
              <p className="font-semibold text-xl">
                Bihar deserves better. Bihar deserves a new start.
              </p>
              <p>
                If we want a brighter future, we must create a new political culture — one built 
                on honesty, capability, and accountability.
              </p>
              <p>
                Bihar Vikas Party is not just a party; it is a mission to rebuild Bihar with the 
                strength of its young generation.
              </p>
              <p className="font-bold text-secondary text-xl">
                Join us in shaping history.
              </p>
            </blockquote>
            <div className="text-right mt-8">
              <p className="font-bold text-xl">— Ashwani Kumar</p>
              <p className="text-white/80">Founding Leader, Bihar Vikas Party</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Role */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
            Leadership Role
          </h2>
          
          <div className="bg-card p-8 rounded-xl border-2 border-primary/20 mb-8">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Ashwani Kumar serves as the <strong className="text-primary">Founding Leader and Guiding 
              Force</strong> of Bihar Vikas Party.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              He provides:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Strategic direction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Policy vision</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Ideological guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Candidate integrity oversight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>National-level political alignment</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg">
            <p className="text-foreground font-semibold">
              His leadership ensures that BVP remains true to its core values: 
              <span className="text-primary"> transparency, development, and meritocracy</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Be Part of the Movement
          </h2>
          <p className="text-xl text-white/90 mb-4">
            Support the vision.
          </p>
          <p className="text-xl text-white/90 mb-8">
            Join the leadership of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/join" 
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Join BVP Now
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-amber-50 border-t-2 border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-amber-900 mb-2">LEGAL DISCLAIMER</p>
              <p className="text-amber-800 leading-relaxed">
                Bihar Vikas Party is currently a proposed political party. Registration with the 
                Election Commission of India will be initiated at the appropriate time.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
