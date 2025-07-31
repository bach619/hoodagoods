import React from 'react';
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import AffiliateDisclosure from '../components/ui/AffiliateDisclosure';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-primary-900 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl text-primary-100">
            Have questions, feedback, or business inquiries? We'd love to hear from you.
          </p>
        </div>
      </div>
      
      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600 mt-1">contact@hoodagoods.com</p>
                      <p className="text-gray-600">support@hoodagoods.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600 mt-1">(555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600 mt-1">
                        123 Review Street<br />
                        Tech City, TC 10101<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Disclosure Section */}
      <section id="disclosure" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-bold">Affiliate Disclosure</h2>
              </div>
              
              <div className="prose max-w-none">
                <p>
                  Hoodagoods is a participant in the Amazon, Clickbank Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com, Clickbank.com. We also participate in affiliate programs with other retailers.
                </p>
                
                <p>
                  This means that when you click on links to various merchants on our site and make a purchase, this can result in us earning a commission. Affiliate programs and affiliations include, but are not limited to, the eBay Partner Network, Walmart, and others.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Our Commitment to You</h3>
                
                <p>
                  We promise that our opinions and recommendations are always honest and unbiased. While we do earn commissions through affiliate links, this does not influence our product evaluations or recommendations in any way.
                </p>
                
                <p>
                  Our reviews are based on thorough research, hands-on testing, and expert analysis. We only recommend products we believe in, and we would recommend them regardless of whether we receive a commission.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">How to Identify Affiliate Links</h3>
                
                <p>
                  Links to retailers where we may earn a commission are typically labeled with text such as "Check Price" or "View on clickbank." Additionally, all pages containing affiliate links include a disclosure statement similar to the one at the bottom of this page.
                </p>
                
                <p>
                  If you have any questions about our affiliate relationships or how we make money, please don't hesitate to contact us using the form above.
                </p>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <AffiliateDisclosure />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Privacy & Terms Sections */}
      <section id="privacy" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            
            <div className="prose max-w-none">
              <p>
                At Hoodagoods, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
              </p>
              
              <h3>Information We Collect</h3>
              
              <p>
                We collect information that you provide directly to us, such as when you subscribe to our newsletter, fill out a contact form, or leave a comment. This information may include your name, email address, and any other information you choose to provide.
              </p>
              
              <p>
                We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring website, pages visited, and the time spent on those pages.
              </p>
              
              <h3>How We Use Your Information</h3>
              
              <p>
                We use the information we collect to provide, maintain, and improve our website, to communicate with you, to monitor and analyze trends and usage, and to carry out any other purpose for which the information was collected.
              </p>
              
              <h3>Cookies</h3>
              
              <p>
                We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our website. This helps us provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>
              
              <h3>Contact Us</h3>
              
              <p>
                If you have any questions about our Privacy Policy, please contact us using the information provided on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="terms" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
            
            <div className="prose max-w-none">
              <p>
                By accessing or using Hoodagoods, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website.
              </p>
              
              <h3>Intellectual Property</h3>
              
              <p>
                The content on ReviewHub, including text, graphics, logos, images, and software, is the property of ReviewHub or its content suppliers and protected by United States and international copyright laws.
              </p>
              
              <h3>User Contributions</h3>
              
              <p>
                By posting comments or other content on our website, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
              </p>
              
              <h3>Disclaimer of Warranties</h3>
              
              <p>
                Hoodagoods is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation of the website or the information, content, materials, or products included on this site.
              </p>
              
              <h3>Limitation of Liability</h3>
              
              <p>
                Hoodagoods will not be liable for any damages of any kind arising from the use of this website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
              </p>
              
              <h3>Governing Law</h3>
              
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the United States and the State of [Your State], without giving effect to any principles of conflicts of law.
              </p>
              
              <h3>Changes to Terms</h3>
              
              <p>
                We reserve the right to modify these Terms of Service at any time. Your continued use of the website following the posting of changes will mean that you accept and agree to the changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;