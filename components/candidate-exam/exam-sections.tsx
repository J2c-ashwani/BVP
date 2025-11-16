'use client'

import { BookOpen, Users, Award, RefreshCw, CheckCircle2, Target } from 'lucide-react'

export default function ExamSections() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction */}
        <div className="mb-16 text-center max-w-3xl mx-auto slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Merit-Based Leadership Through Examination
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BVP follows India's first fully transparent, BPSC-style exam system to choose 
            candidates. Every aspirant is evaluated on the same criteria, eliminating favoritism 
            and ensuring only the most qualified leaders represent Bihar.
          </p>
        </div>

        {/* Stage 1: Written Exam */}
        <article className="mb-16 bg-card rounded-2xl shadow-lg overflow-hidden fade-in">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  Stage 1: Written Examination
                </h3>
                <p className="text-white/90 text-lg">Total Marks: 200</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 sm:p-10">
            <p className="text-foreground mb-8 leading-relaxed text-lg">
              The written examination is comprehensive and tests candidates' knowledge across 
              multiple domains relevant to governance and leadership. All questions are 
              objective-type with negative marking to ensure accuracy.
            </p>

            {/* Topic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { 
                  title: 'Constitution of India', 
                  desc: 'Fundamental rights, duties, constitutional structure, and amendments',
                  icon: '📜'
                },
                { 
                  title: 'Governance & Administration', 
                  desc: 'Indian administrative system, bureaucracy, public service ethics',
                  icon: '🏛️'
                },
                { 
                  title: 'Ethics & Integrity', 
                  desc: 'Moral leadership, anti-corruption measures, accountability',
                  icon: '⚖️'
                },
                { 
                  title: 'Bihar Issues', 
                  desc: 'State-specific challenges, development priorities, regional context',
                  icon: '🗺️'
                },
                { 
                  title: 'Development Policies', 
                  desc: 'Urban development, rural development, infrastructure, poverty alleviation',
                  icon: '🏗️'
                },
                { 
                  title: 'Party Ideology', 
                  desc: 'BVP values, vision, manifesto, and core principles',
                  icon: '🎯'
                },
              ].map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-card border-2 border-border hover:border-primary/40 p-5 rounded-lg transition-all hover:shadow-md group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <h4 className="font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        {topic.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Exam Details Box */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground">
                <div>
                  <span className="font-bold text-primary">Duration:</span> 3 hours
                </div>
                <div>
                  <span className="font-bold text-primary">Question Type:</span> Multiple Choice (MCQ)
                </div>
                <div>
                  <span className="font-bold text-primary">Negative Marking:</span> 0.33 marks per wrong answer
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Stage 2: Interview */}
        <article className="mb-16 bg-card rounded-2xl shadow-lg overflow-hidden fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  Stage 2: Personal Interview
                </h3>
                <p className="text-white/90 text-lg">Total Marks: 100</p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <p className="text-foreground mb-8 leading-relaxed text-lg">
              Shortlisted candidates from the written exam proceed to a rigorous personal interview. 
              A panel of experienced administrators, experts, and party leaders assess candidates' 
              personality, vision, and leadership qualities.
            </p>

            {/* Assessment Criteria Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { 
                  title: 'Leadership Qualities', 
                  desc: 'Decision-making ability, vision, strategic thinking',
                  icon: '👔'
                },
                { 
                  title: 'Integrity & Character', 
                  desc: 'Personal integrity, ethical standards, credibility',
                  icon: '💎'
                },
                { 
                  title: 'Communication Skills', 
                  desc: 'Articulation, clarity, ability to connect with people',
                  icon: '💬'
                },
                { 
                  title: 'Crisis Management', 
                  desc: 'Problem-solving under pressure, adaptability',
                  icon: '🎯'
                },
                { 
                  title: 'Social Work Background', 
                  desc: 'Community engagement, service orientation, development projects',
                  icon: '🤝'
                },
                { 
                  title: 'Constituency Knowledge', 
                  desc: 'Understanding of local issues, people\'s aspirations',
                  icon: '📊'
                },
              ].map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-card border-2 border-border hover:border-primary/40 p-5 rounded-lg transition-all hover:shadow-md group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <h4 className="font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        {topic.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interview Details Box */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground">
                <div>
                  <span className="font-bold text-primary">Duration:</span> 30-45 minutes per candidate
                </div>
                <div>
                  <span className="font-bold text-primary">Panel:</span> 5-7 experienced professionals
                </div>
                <div>
                  <span className="font-bold text-primary">Transparency:</span> Open format with media observation
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Final Merit List */}
        <article className="mb-16 bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl shadow-xl overflow-hidden fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Final Merit List & Selection
                </h3>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 mb-6 border border-white/20">
              <p className="text-xl font-bold mb-6 text-white">Total Marks: 300</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/30">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-lg">Written Examination</span>
                  </div>
                  <span className="font-bold text-xl">200 marks</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/30">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-lg">Personal Interview</span>
                  </div>
                  <span className="font-bold text-xl">100 marks</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="font-bold text-xl">Total Score</span>
                  <span className="font-bold text-2xl text-secondary">300 marks</span>
                </div>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed text-lg">
              Candidates are selected based on their combined score from both stages. The final 
              merit list is prepared in descending order of marks and published transparently. 
              Top candidates are nominated to contest elections on BVP ticket.
            </p>
          </div>
        </article>

        {/* Re-Selection Rule */}
        <article className="bg-card rounded-2xl shadow-lg p-8 sm:p-10 fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                Re-Selection Rule for Winning Candidates
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg">
              <p className="text-foreground font-semibold text-lg leading-relaxed">
                In the next election cycle, winning candidates may be re-nominated without 
                taking the exam again.
              </p>
            </div>

            <p className="text-foreground leading-relaxed">
              This rule serves multiple purposes:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Reward Excellence',
                  desc: 'Candidates who have served well are recognized and rewarded with re-nomination',
                  icon: '🏆'
                },
                {
                  title: 'Continuity',
                  desc: 'Experienced leaders continue to serve if they maintain performance standards',
                  icon: '🔄'
                },
                {
                  title: 'New Opportunities',
                  desc: 'Exams are conducted only for seats the party did not win previously, opening doors for new candidates',
                  icon: '🚪'
                },
                {
                  title: 'Expansion',
                  desc: 'As the party expands to new constituencies, fresh candidates compete through the examination',
                  icon: '📈'
                },
              ].map((item, index) => (
                <div key={index} className="bg-primary/5 p-5 rounded-lg border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-foreground font-medium">
                This ensures that BVP remains competitive, merit-based, and continuously improves 
                its leadership quality while providing stability through experienced, proven leaders.
              </p>
            </div>
          </div>
        </article>

        {/* Advantages Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Transparent Process',
              desc: 'Every step is open, documented, and auditable by the public',
              delay: '0.4s'
            },
            {
              icon: Award,
              title: 'Merit-Based',
              desc: 'Only the most qualified and ethical individuals lead',
              delay: '0.5s'
            },
            {
              icon: RefreshCw,
              title: 'Continuous Improvement',
              desc: 'Regular evaluation ensures leaders remain accountable',
              delay: '0.6s'
            }
          ].map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div 
                key={index} 
                className="text-center fade-in group hover:scale-105 transition-transform" 
                style={{ animationDelay: advantage.delay }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{advantage.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{advantage.desc}</p>
              </div>
            )
          })}
        </div>

               {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 sm:p-10 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Lead Bihar?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            If you believe in merit-based politics and want to serve Bihar with integrity, 
            prepare for the BVP examination system.
          </p>
          <a 
            href="/join" 
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            Join BVP Now
          </a>
        </div>

      </div>
    </section>
  )
}
