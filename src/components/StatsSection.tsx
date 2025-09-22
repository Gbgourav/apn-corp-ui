// app/components/StatsSection.tsx
export default function StatsSection() {
    const stats = [
      { number: "500+", label: "Projects Completed" },
      { number: "20+", label: "Years of Excellence" },
      { number: "10,000+", label: "Happy Families" },
      { number: "50+", label: "Awards Won" }
    ]
  
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  