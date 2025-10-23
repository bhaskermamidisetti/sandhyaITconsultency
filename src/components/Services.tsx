import { Code2, Package, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Software Solutions',
    description: 'Tailored applications that enhance productivity and business intelligence. We design and develop custom software that meets your specific business needs, from enterprise systems to web applications.',
    highlights: ['Custom Development', 'System Integration', 'Business Intelligence', 'API Development']
  },
  {
    icon: Package,
    title: 'Warehouse Services',
    description: 'Efficient, technology-driven inventory and logistics management. Our warehouse solutions streamline operations, reduce costs, and improve accuracy through smart automation.',
    highlights: ['Inventory Management', 'Logistics Automation', 'Real-time Tracking', 'Process Optimization']
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    description: 'Hands-on programs that prepare professionals for real-world tech challenges. Bridge the gap between theory and practice with our industry-focused training courses.',
    highlights: ['Professional Development', 'Practical Skills', 'Industry Certification', 'Career Advancement']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions that drive growth, efficiency, and long-term success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you're a startup looking to digitize operations, or an enterprise seeking to upskill your workforce, we're here to guide your digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
