import Image from "next/image";
import Link from "next/link";

export default function ExploreArea() {
  return (
    <section className="mt-6 lg:mt-12 mb-0 w-full px-2">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
        Explore the Area
      </h2>
      <div className="mt-2 lg:mt-4 flex flex-col lg:flex-row gap-4 lg:gap-16 px-2">
        {/* Left: Area Info */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 mb-4 ">
          {/* Restaurants & Cafes */}
          <div>
            <div className="flex items-center gap-2 text-base lg:text-lg font-semibold text-gray-700 mb-2">
              <span className="lg:text-2xl">🍽️</span> Restaurants & cafes
            </div>
            <div className="text-gray-600 text-base flex flex-col gap-1 px-2">
              <div className="flex justify-between">
                <span>Blue Cafe</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Blue Cafe</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Blue Cafe</span>
                <span>1.4 km</span>
              </div>
            </div>
          </div>
          {/* Shops & Markets */}
          <div>
            <div className="flex items-center gap-2 text-base lg:text-lg font-semibold text-gray-700 mb-2">
              <span className="lg:text-2xl">🛒</span> Shops & Markets
            </div>
            <div className="text-gray-600 text-base flex flex-col gap-1 px-2">
              <div className="flex justify-between">
                <span>Central Mall</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Central Mall</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Central Mall</span>
                <span>1.4 km</span>
              </div>
            </div>
          </div>
          {/* Beaches */}
          <div className="lg:mt-[-32px]">
            <div className="flex items-center gap-2 text-base lg:text-lg font-semibold text-gray-700 mb-2">
              <span className="lg:text-2xl">🏖️</span> Beaches
            </div>
            <div className="text-gray-600 text-base flex flex-col gap-1 px-2">
              <div className="flex justify-between">
                <span>Les Dunes Beach</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Les Dunes Beach</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Les Dunes Beach</span>
                <span>1.4 km</span>
              </div>
            </div>
          </div>
          {/* Public Transport */}
          <div className="lg:mt-[-32px]">
            <div className="flex items-center gap-2 text-base lg:text-lg font-semibold text-gray-700 mb-2">
              <span className="lg:text-2xl">🚉</span> Public transport
            </div>
            <div className="text-gray-600 text-base flex flex-col gap-1 px-2">
              <div className="flex justify-between">
                <span>Train – Riverdale Central Station &nbsp; &nbsp; &nbsp;</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Metro – Cityline Metro Hub</span>
                <span>1.4 km</span>
              </div>
              <div className="flex justify-between">
                <span>Metro – Cityline Metro Hub</span>
                <span>1.4 km</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className=" flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.7551937438902!2d3.048328576482322!3d36.776439872253974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb250ed2c2957%3A0xf54d6adcd3a4bafb!2sHotel%20El%20Aurassi!5e0!3m2!1sen!2sbd!4v1751400812596!5m2!1sen!2sbd"
            width="100%"
            height="240"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Map Location"
            className=""
          ></iframe>
          <div className="text-center py-3 text-[#007DD0] text-base lg:text-lg shadow-lg border-t-2 border-gray-200 rounded-b-lg ">
            <Link href="https://www.google.com/maps/place/Hotel+El+Aurassi/@36.7764399,3.0483286,17z/data=!3m1!4b1!4m9!3m8!1s0x128fb250ed2c2957:0xf54d6adcd3a4bafb!5m2!4m1!1i2!8m2!3d36.7764399!4d3.0509035!16s%2Fg%2F1hc0h48ww?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D" className="hover:cursor-pointer">
              Explore the area
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
