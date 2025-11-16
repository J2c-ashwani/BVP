import { Mail, Phone, Linkedin, Twitter, Users, Award, Shield } from 'lucide-react'

const teamMembers = [
  {
    name: 'Position',
    title: 'Party President',
    designation: 'Chief Executive & Party Representative',
    description: 'Leads the party vision, oversees organizational strategy, and represents BVP in all public matters.',
    email: 'president@biharvikas.party',
    phone: '+91 98765 43210',
  },
  {
    name: 'Position',
    title: 'Vice President',
    designation: 'Deputy & Administrative Lead',
    description: 'Assists the President, manages day-to-day operations, and ensures organizational efficiency.',
    email: 'vp@biharvikas.party',
    phone: '+91 98765 43211',
  },
  {
    name: 'Position',
    title: 'General Secretary',
    designation: 'Communications & Coordination',
    description: 'Handles party communications, coordinates with regional units, and manages administrative functions.',
    email: 'secretary@biharvikas.party',
    phone: '+91 98765 43212',
  },
  {
    name: 'Position',
    title: 'Treasurer',
    designation: 'Financial Management',
    description: 'Manages party finances transparently, maintains accounts, and ensures financial accountability.',
    email: 'treasurer@biharvikas.party',
    phone: '+91 98765 43213',
  },
]

export default function LeadershipTeam() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Core Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our founding team brings decades of experience in governance, administration, and community development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 fade-in border-2 border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                <div className="relative text-center z-10">
                  <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full mb-4 flex items-center justify-center border-2 border-white/30">
                    <span className="text-5xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-white text-sm font-semibold opacity-90">Leadership Position</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.title}</h3>
                  <p className="text-muted-foreground font-semibold text-sm uppercase tracking-wide">
                    {member.designation}
                  </p>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 border-t border-border pt-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={16} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={16} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium">{member.phone}</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 text-sm font-semibold shadow-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white py-3 rounded-lg hover:bg-secondary/90 transition-all hover:scale-105 text-sm font-semibold shadow-sm"
                  >
                    <Twitter size={16} />
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl text-center fade-in border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <h4 className="font-bold text-foreground mb-2">Core Officers</h4>
            <p className="text-sm text-muted-foreground">Leading the party towards transparent governance</p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl text-center fade-in border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <h4 className="font-bold text-foreground mb-2">Transparency</h4>
            <p className="text-sm text-muted-foreground">All decisions made with accountability</p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl text-center fade-in border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">Merit</div>
            <h4 className="font-bold text-foreground mb-2">Based Leadership</h4>
            <p className="text-sm text-muted-foreground">All positions earned through excellence</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 text-white p-10 rounded-2xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Want to Join Our Leadership Team?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            BVP welcomes capable, honest individuals who want to serve Bihar through merit-based leadership
          </p>
          <a 
            href="/candidate-exam" 
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            Learn About Our Selection Process
          </a>
        </div>
      </div>
    </section>
  )
}
