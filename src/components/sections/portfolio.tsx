import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Custom Laptop Skins",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&h=800&auto=format&fit=crop",
      category: "Laptop Skins",
    },
    {
      title: "Phone Cases",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&h=800&auto=format&fit=crop",
      category: "Mobile Covers",
    },
    {
      title: "Custom T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&h=800&auto=format&fit=crop",
      category: "T-Shirt Printing",
    },
    {
      title: "Vinyl Stickers",
      image: "https://images.unsplash.com/photo-1496493820873-82288ac48a48?q=80&w=800&h=800&auto=format&fit=crop",
      category: "Stickers",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our recent projects and get inspired
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
