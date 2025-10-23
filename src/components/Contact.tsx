import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you're looking for IT consulting, warehouse solutions, or professional training — our team is ready to assist.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-xl shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                  <p className="text-gray-700">101 Whitechapel High Street</p>
                  <p className="text-gray-700">London</p>
                  <p className="text-gray-700">E1 7RA</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <a href="mailto:info@sandhyaitconsulting.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@sandhyaitconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <a href="tel:+447448332830" className="text-blue-600 hover:text-blue-800 transition-colors">
                    +44 7448 332830
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-gray-700">Monday – Saturday</p>
                  <p className="text-gray-700">9 AM – 6 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Website</h4>
                  <a href="https://www.sandhyaitconsulting.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    www.sandhyaitconsulting.com
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office and technology workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">Visit Our Office</h4>
                  <p className="text-gray-200">Experience our innovative workspace in the heart of London</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">We're Here to Help</h3>
            <p className="text-gray-300 text-lg mb-2">
              Have a question or ready to start your project?
            </p>
            <p className="text-gray-300">
              Reach out to us via email or phone, and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
