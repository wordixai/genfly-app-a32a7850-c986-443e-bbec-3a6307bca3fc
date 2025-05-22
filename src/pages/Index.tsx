import { Coffee, Croissant, Sandwich, Clock, MapPin } from 'lucide-react';

const Index = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Cappuccino', price: '$4.00', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Avocado Toast', price: '$8.50', icon: <Sandwich className="w-6 h-6" /> },
    { name: 'Croissant', price: '$3.75', icon: <Croissant className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Brew & Bites</h1>
            <p className="text-xl md:text-2xl mb-8">Artisanal coffee and fresh pastries in the heart of the city</p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded in 2015, Brew & Bites is a cozy cafe dedicated to serving high-quality coffee and homemade pastries. 
            We source our beans from sustainable farms and bake fresh every morning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2">Premium Coffee</h3>
            <p className="text-gray-600">Single-origin beans roasted to perfection</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Croissant className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2">Fresh Pastries</h3>
            <p className="text-gray-600">Baked fresh daily using local ingredients</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Sandwich className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2">Healthy Options</h3>
            <p className="text-gray-600">Gluten-free and vegan choices available</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900">Our Menu</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                </div>
                <div className="text-amber-700 font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">Visit Us</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mt-1 mr-3 text-amber-700" />
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-600">123 Coffee Street, Downtown</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 mt-1 mr-3 text-amber-700" />
                <div>
                  <h3 className="text-lg font-medium">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 7am - 7pm</p>
                  <p className="text-gray-600">Saturday - Sunday: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
            {/* Map placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-amber-100">
              <p className="text-amber-700 font-medium">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;