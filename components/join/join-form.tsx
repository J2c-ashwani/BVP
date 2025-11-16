'use client'

import { useState } from 'react'
import { User, Mail, Phone, MapPin, Heart, CheckCircle } from 'lucide-react'

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    address: '',
    voterId: '',
    reason: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', age: '', mobile: '', email: '', address: '', voterId: '', reason: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4 text-balance">
                Membership Form
              </h2>
              <p className="text-gray-600 text-lg">
                Fill in your details below to become a member of Bihar Vikas Party
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#F5F7FA] rounded-2xl p-8 sm:p-10 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="18"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                  placeholder="Enter your age"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                  placeholder="10-digit mobile number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                  placeholder="City/District, State"
                />
              </div>

              {/* Voter ID */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  Voter ID (Optional)
                </label>
                <input
                  type="text"
                  name="voterId"
                  value={formData.voterId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                  placeholder="Your voter ID number"
                />
              </div>

              {/* Why Join */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  <Heart className="inline w-4 h-4 mr-2" />
                  Why do you want to join BVP? *
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72] resize-none"
                  placeholder="Share your motivation and what you hope to contribute..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0C2D72] text-white py-3 rounded-lg font-bold hover:bg-[#0A1F50] transition-colors shadow-md hover:shadow-lg mt-8"
              >
                Become a Member
              </button>

              <p className="text-center text-sm text-gray-600">
                By submitting this form, you agree to our terms and conditions.
              </p>
            </form>

            <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Joining BVP is free.</strong> Everyone from Bihar is welcome.
              </p>
              <p className="text-sm text-gray-600">
                As a member, you will have the opportunity to participate in party activities, vote in internal elections, and contribute to Bihar's development.
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 scale-in">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-3">Welcome to BVP!</h3>
            <p className="text-lg text-gray-600 max-w-md">
              Thank you for joining Bihar Vikas Party. We will contact you shortly with membership details and next steps.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Redirecting to home page...
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
