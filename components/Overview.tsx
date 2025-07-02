import React from "react";
import { Button } from "./ui/button";
import {
  Dumbbell,
  Maximize2,
  Wifi,
  Wind,
  Hotel,
  MessageSquareDot,
  Calendar,
  House,
} from "lucide-react";
import { TbSwimming } from "react-icons/tb";
import { MdLocalDining } from "react-icons/md";

function Overview() {
  return (
    <div className="py-4 lg:py-12">
      {/* Tabs */}
      <div className="flex justify-between lg:justify-start gap-4 lg:gap-12 mb-8">
        <button className="pb-2 border-b-2 border-[#007DD0] text-[#007DD0] font-semibold">
          Overview
        </button>
        <button className="pb-2 text-gray-500">Features</button>
        <button className="pb-2 text-gray-500">Reviews</button>
        <button className=" flex items-center gap-2 bg-[#007DD0] text-white px-4 py-2 rounded-full">
          <MessageSquareDot className="w-4 h-4" />
          <span>Message</span>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1">
          {/* Property Type and Features */}
          <div className="flex  gap-12 mb-8">
            <div>
              <div className="font-semibold text-gray-700 lg:mb-2">
                Property Type
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2 py-2 ">
                  <span className="bg-gray-100 p-2 rounded">
                    <Hotel className="w-4 h-4" />
                  </span>
                  Resorts
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 lg:mb-2">
                Property Type
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2 py-2">
                  <span className="bg-gray-100 p-2 rounded">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                  12000 sqft
                </div>
              </div>
            </div>
          </div>
          {/* Features */}
          <div className="mb-4 lg:mb-8">
            <div className="font-semibold text-gray-700 lg:mb-2">Features</div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 py-1 lg:py-2 ">
                <span className="bg-gray-100 p-2 rounded">
                  <Wifi className="w-4 h-4" />
                </span>
                Wifi
              </div>
              <div className="flex items-center gap-2 py-1 lg:py-2 ">
                <span className="bg-gray-100 p-2 rounded">
                  <MdLocalDining className="w-4 h-4" />
                </span>
                Dining
              </div>
              <div className="flex items-center gap-2 py-1 lg:py-2 ">
                <span className="bg-gray-100 p-1 rounded">
                  <TbSwimming className="w-6 h-6" />
                </span>
                Swimming Pool
              </div>
            </div>
            <div className="flex flex-wrap gap-4 ">
              <div className="flex items-center gap-2  py-1 lg:py-2">
                <span className="bg-gray-100 p-2 rounded">
                  <Wind className="w-4 h-4" />
                </span>
                Air Conditioning
              </div>
              <div className="flex items-center gap-2  py-1 lg:py-2">
                <span className="bg-gray-100 p-2 rounded">
                  <Dumbbell className="w-4 h-4" />
                </span>
                Gym
              </div>
            </div>
          </div>

          
        </div>
        {/* Right Reservation Box */}
        <div className="w-[320px] mx-auto ">
          <div className="bg-white border rounded-xl p-8 lg:py-16 flex flex-col shadow-sm">
            <div className="text-gray-700 mb-2">1 week, 2 adults, 1 child</div>
            <div className="text-lg lg:text-2xl font-bold text-gray-900 mb-4">
              USD $6,112
            </div>
            <Button className="bg-[#007DD0] text-base text-white w-full py-3 rounded-full">
              Reserve
            </Button>
          </div>
        </div>
      </div>
      {/* Availability */}
      <div className="mt-8">
        <div className="font-bold lg:text-xl mb-2 lg:mb-4">Availability</div>
        <div className="bg-white rounded-xl border border-[#0EB1FD] p-6 grid grid-cols-2 sm:grid-cols-12 gap-4 items-center max-w-[1000px] ">
          <div className="flex flex-col items-start sm:col-span-3">
            <span className="text-gray-500 text-sm">Check-In</span>
            <div className="flex items-center gap-2 mt-2 bg-gray-100 rounded-full text-sm lg:text-base  px-2 pr-4 py-1">
              <span className="bg-[#007DD0] text-white rounded-full p-2">
                <Calendar className="w-4 h-4" />
              </span>
              <span className="font-medium">Tue, 23 June 2024</span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:col-span-3">
            <span className="text-gray-500 text-sm">Check-Out</span>
            <div className="flex items-center gap-2 mt-2 bg-gray-100 rounded-full text-sm lg:text-base px-2 pr-4 py-1">
              <span className="bg-[#007DD0] text-white rounded-full p-2">
                <Calendar className="w-4 h-4" />
              </span>
              <span className="font-medium">Sat, 29 June 2024</span>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start col-span-2 sm:col-span-4">
            <span className="text-gray-500 text-sm">Room & Guest</span>
            <div className="flex items-center gap-2 mt-2 bg-gray-100 rounded-full text-sm lg:text-base px-2 pr-4 py-1">
              <span className="bg-[#007DD0] text-white rounded-full p-2">
                <House className="w-4 h-4" />
              </span>
              <span className="font-medium">
                2 Adults – 0 Children – 1 Room
              </span>
            </div>
          </div>
          <Button className="col-span-2 sm:mt-6 bg-[#007DD0] text-base text-white px-8 py-2 rounded-full">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Overview;
