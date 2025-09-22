// app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">ANP Corp</h3>
              <p className="text-gray-400 mb-4">
                Building premium real estate developments that exceed expectations 
                and create lasting value for our clients.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Residential Development</a></li>
                <li><a href="#" className="hover:text-white transition">Commercial Projects</a></li>
                <li><a href="#" className="hover:text-white transition">Property Management</a></li>
                <li><a href="#" className="hover:text-white transition">Investment Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Business District</p>
                <p>City Center, State 12345</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@anpcorp.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ANP Corp. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    )
  }