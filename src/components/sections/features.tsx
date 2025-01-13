export default function Features() {
  const features = [
    {
      title: "Premium Materials",
      description: "We use only the highest quality materials for long-lasting results",
      icon: "✨",
    },
    {
      title: "Custom Design",
      description: "Get unique designs tailored to your preferences and style",
      icon: "🎨",
    },
    {
      title: "Professional Installation",
      description: "Expert installation ensures perfect fitting and finish",
      icon: "🛠️",
    },
    {
      title: "Quick Turnaround",
      description: "Fast service without compromising on quality",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of quality, creativity, and professional service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
