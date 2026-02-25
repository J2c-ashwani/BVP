import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Bihar Vikas Party Logo" 
                width={44} 
                height={44}
                className="h-11 w-auto"
              />
              <span className="font-bold text-lg text-white">Bihar Vikas Party</span>
            </Link>
            <p className="text-sm text-gray-400">A proposed political party committed to transparency, development, and merit-based leadership.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#FF7A00] transition-colors">Home</Link></li>
              <li><Link href="/vision" className="hover:text-[#FF7A00] transition-colors">Vision</Link></li>
              <li><Link href="/constitution" className="hover:text-[#FF7A00] transition-colors">Constitution</Link></li>
              <li><Link href="/candidate-exam" className="hover:text-[#FF7A00] transition-colors">Candidate Exam</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold text-white mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/leadership" className="hover:text-[#FF7A00] transition-colors">Leadership</Link></li>
              <li><Link href="/join" className="hover:text-[#FF7A00] transition-colors">Join Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF7A00] transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect With Us</h4>
            <div className="space-y-2 mb-4 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:sukashwanikumar@gmail.com" className="hover:text-[#FF7A00]">sukashwanikumar@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+917903525592" className="hover:text-[#FF7A00]">+91 7903525592</a>
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-[#0C2D72] rounded-lg hover:bg-[#FF7A00] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 bg-[#0C2D72] rounded-lg hover:bg-[#FF7A00] transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-[#0C2D72] rounded-lg hover:bg-[#FF7A00] transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-500 text-center mb-4">
            <strong>Legal Disclaimer:</strong> Bihar Vikas Party is currently a proposed political party. Registration with the Election Commission of India will be initiated at the appropriate time. All activities shown on this website are part of a pre-registration public outreach initiative.
          </p>
          <p className="text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Bihar Vikas Party. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
