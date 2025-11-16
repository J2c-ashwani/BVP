'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Vision', href: '/vision' },
    { name: 'Youth Message', href: '/youth-message' }, // ✅ NEW PAGE ADDED
    { name: 'Founding Leader', href: '/founding-leader' },
    { name: 'Constitution', href: '/constitution' },
    { name: 'Candidate Exam', href: '/candidate-exam' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center gap-2" onClick={handleNavClick}>
            <Image 
              src="/logo.png" 
              alt="Bihar Vikas Party Logo" 
              width={44} 
              height={44}
              className="h-11 w-auto"
            />
            <span className="hidden sm:inline font-bold text-lg text-primary">Bihar Vikas Party</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/join"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Join BVP
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/join"
              className="block mx-4 mt-4 bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-primary/90 font-medium"
              onClick={handleNavClick}
            >
              Join BVP
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
