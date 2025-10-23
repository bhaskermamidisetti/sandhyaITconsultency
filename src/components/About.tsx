import { Target, Eye, Heart, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Always seeking smarter ways to solve complex challenges'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparent and ethical in every client relationship'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to quality results that make a real difference'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Building capability in our clients, students, and team'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for digital transformation and workforce development
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded with a passion for technology and innovation, Sandhya IT Consulting is a growing IT solutions provider focused on delivering value through software, system integration, and professional training.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our consultants and trainers bring years of experience in enterprise systems, software design, and operational automation. We combine technical expertise with a commitment to understanding your business needs — creating practical, cost-effective solutions.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses and individuals with reliable IT solutions and skill-based training that drive growth, efficiency, and long-term success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a trusted partner for digital transformation and workforce development, helping organizations thrive in a fast-changing technology landscape.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
