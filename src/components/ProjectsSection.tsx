export default function ProjectsSection() {
    const projects = [
      {
        id: 1,
        title: "Skyline Residences",
        location: "Downtown District",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        price: "Starting from $850,000"
      },
      {
        id: 2,
        title: "Garden View Apartments",
        location: "Green Valley",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        price: "Starting from $650,000"
      },
      {
        id: 3,
        title: "Waterfront Villas",
        location: "Marina Bay",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        price: "Starting from $1,200,000"
      }
    ]
  
    return (
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest developments featuring world-class amenities 
              and exceptional design standards.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative h-64">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.location}</p>
                  <p className="text-orange-500 font-semibold text-lg mb-4">{project.price}</p>
                  <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  