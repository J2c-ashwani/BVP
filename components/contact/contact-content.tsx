'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, MessageSquare, CheckCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0C2D72] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bihar Vikas Party Headquarters<br />
                    Patna, Bihar<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0C2D72] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Email</h3>
                  <a href="mailto:sukashwanikumar@gmail.com" className="text-[#0C2D72] hover:underline font-medium">
                    sukashwanikumar@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-2">General inquiries</p>
                  <a href="mailto:sukashwanikumar@gmail.com" className="text-[#0C2D72] hover:underline font-medium block mt-2">
                    sukashwanikumar@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm">Press & media inquiries</p>
                </div>
              </div>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0C2D72] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Phone</h3>
                  <a href="tel:+917903525592" className="text-[#0C2D72] hover:underline font-medium">
                    +91 7903525592
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Available 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-[#0C2D72] rounded-lg flex items-center justify-center text-white hover:bg-[#FF7A00] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#0C2D72] rounded-lg flex items-center justify-center text-white hover:bg-[#FF7A00] transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#0C2D72] rounded-lg flex items-center justify-center text-white hover:bg-[#FF7A00] transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#0C2D72] rounded-lg flex items-center justify-center text-white hover:bg-[#FF7A00] transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <div className="bg-[#F5F7FA] rounded-2xl p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72]"
                        placeholder="Subject of your message"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C2D72] resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0C2D72] text-white py-3 rounded-lg font-bold hover:bg-[#0A1F50] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={20} />
                    Send Message
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-[#F5F7FA] rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-96">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 scale-in">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Message Sent!</h3>
                <p className="text-gray-600 text-center">
                  Thank you for reaching out. We will respond to your inquiry soon.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 rounded-2xl p-8 sm:p-10 text-center border-l-4 border-[#0C2D72]">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Media & Press Inquiries</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-4">
            For press & media inquiries, please email us at <a href="mailto:sukashwanikumar@gmail.com" className="text-[#0C2D72] font-bold hover:underline">sukashwanikumar@gmail.com</a>. We provide press releases, interview opportunities, and background information to qualified journalists and media organizations.
          </p>
          <p className="text-sm text-gray-600">
            Response time: Within 24-48 hours for legitimate media inquiries
          </p>
        </div>
      </div>
    </section>
  )
}
