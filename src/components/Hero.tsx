import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Sandhya IT Consulting
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Empowering businesses through innovative software solutions, smart warehouse management, and industry-ready IT training.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Sandhya IT Consulting, we help companies streamline operations and achieve measurable results through technology.
            </p>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <Star className="w-5 h-5 flex-shrink-0 mt-1 text-blue-400" />
                <span>Custom software development that enhances productivity and business intelligence</span>
              </p>
              <p className="flex items-start gap-3">
                <Star className="w-5 h-5 flex-shrink-0 mt-1 text-blue-400" />
                <span>Efficient, technology-driven inventory and logistics management</span>
              </p>
              <p className="flex items-start gap-3">
                <Star className="w-5 h-5 flex-shrink-0 mt-1 text-blue-400" />
                <span>Hands-on training programs that prepare professionals for real-world tech challenges</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-center">
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative h-96 md:h-[500px] animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-slate-500/20 rounded-2xl backdrop-blur-sm"></div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="IT professionals collaborating on technology solutions"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-blue-300">
            Your success is our mission. Together, let's build smarter systems and stronger teams.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
