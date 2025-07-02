import { Maximize2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaBed, FaBath, FaRulerCombined, FaInfoCircle } from 'react-icons/fa'

const properties = [
  {
    img: '/img1.png',
    title: 'Sofitel Algiers Hamma Garden',
    desc: 'Sofitel Algiers Hamma Garden offers accommodations overlooking the stunning Botanical Garden of Hamma.',
    rating: 4.5,
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    area: '1,200',
  },
  {
    img: '/img2.png',
    title: 'El Aurassi Hotel',
    desc: 'El Aurassi Hotel features modern rooms with panoramic city views and top-notch amenities.',
    rating: 4.7,
    price: 850,
    bedrooms: 3,
    bathrooms: 2,
    area: '1,500',
  },
  {
    img: '/img3.png',
    title: 'Hotel ABC',
    desc: 'Hotel ABC provides comfort and convenience in the heart of Algiers, close to major attractions.',
    rating: 4.2,
    price: 620,
    bedrooms: 2,
    bathrooms: 1,
    area: '1,000',
  },
  {
    img: '/img1.png',
    title: 'Palace Stay',
    desc: 'Experience royal luxury at Palace Stay, with exquisite interiors and world-class service.',
    rating: 4.8,
    price: 1200,
    bedrooms: 4,
    bathrooms: 3,
    area: '2,000',
  },
  {
    img: '/img2.png',
    title: 'City Center Suites',
    desc: 'City Center Suites offers stylish living spaces in the bustling downtown area.',
    rating: 4.3,
    price: 700,
    bedrooms: 2,
    bathrooms: 2,
    area: '1,100',
  },
  {
    img: '/img3.png',
    title: 'Seaside Resort',
    desc: 'Relax at Seaside Resort with breathtaking views of the Mediterranean and private beach access.',
    rating: 4.6,
    price: 950,
    bedrooms: 3,
    bathrooms: 2,
    area: '1,600',
  },
]

function AlsoLike() {
  return (
    <div>
      <h2 className="text-lg lg:text-2xl font-semibold mb-2 lg:mb-4">You may also like</h2>
      {/* Carousel on small screens, grid on md+ */}
      <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 scrollbar-hide">
        {properties.map((prop, idx) => (
          <div
            key={idx}
            className="min-w-[320px] max-w-xs bg-white rounded-lg overflow-hidden flex-shrink-0 md:min-w-0 md:max-w-none"
          > 
            <div className="relative">
              <Image src={prop.img} alt={prop.title} className="w-full h-48 object-cover rounded-lg" width={320} height={320} />
              <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white rounded-full flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span className="text-sm font-semibold">{prop.rating}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base lg:text-lg font-bold mb-1">{prop.title}</h3>
              <p className="text-gray-500 text-xs lg:text-sm mb-3">{prop.desc}</p>
              <div className="lg:text-xl mb-2">{prop.price} <span className="text-xs lg:text-sm font-normal text-gray-500">Per Night</span></div>
              <div className="flex items-center text-gray-600 text-xs lg:text-sm mb-4 gap-4">
                <span className="flex items-center"><FaBed className="mr-1" /> {prop.bedrooms} Bedroom</span>
                <span className="flex items-center"><FaBath className="mr-1" /> {prop.bathrooms} Bathroom</span>
                <span className="flex items-center"><Maximize2 className="mr-1 w-3 h-3" /> {prop.area} sq ft</span>
              </div>
              <div className="flex justify-between items-center gap-6 lg:gap-8">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition hover:cursor-pointer">Book Now</button>
                <div className="p-2 bg-[#007DD0]/10 rounded-full">
                <FaInfoCircle className="text-blue-400 text-xl cursor-pointer" />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlsoLike