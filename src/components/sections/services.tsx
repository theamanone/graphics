import { Printer, Smartphone, Palette, Package } from "lucide-react";

const services = [
  {
    title: "Custom Printing",
    description: "High-quality printing services for all your needs, from business cards to large format prints.",
    icon: Printer,
    color: "blue",
  },
  {
    title: "Mobile Accessories",
    description: "Personalized phone cases and accessories that protect and showcase your style.",
    icon: Smartphone,
    color: "purple",
  },
  {
    title: "Design Services",
    description: "Professional design services to bring your ideas to life with creative and unique solutions.",
    icon: Palette,
    color: "pink",
  },
  {
    title: "Custom Packaging",
    description: "Branded packaging solutions that make your products stand out and leave a lasting impression.",
    icon: Package,
    color: "green",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We offer a wide range of customization services to help you stand out
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colorClasses = {
              blue: "bg-blue-50 text-blue-600",
              purple: "bg-purple-50 text-purple-600",
              pink: "bg-pink-50 text-pink-600",
              green: "bg-green-50 text-green-600",
            }[service.color];

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses} p-3 mb-6`}>
                  <service.icon className="w-full h-full" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
