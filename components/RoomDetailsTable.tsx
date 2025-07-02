import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import {
  Maximize2,
  Wind,
  Bath,
  Monitor,
  Wifi,
  UserRound,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const rooms = [
  {
    type: "Twin Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    features: ["Room", "Air condition", "Bathroom", "TV", "WIFI"],
    price: 282,
    breakfast: true,
    left: 4,
  },
  {
    type: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    features: ["Room", "Air condition", "Bathroom", "TV", "WIFI"],
    price: 282,
    breakfast: true,
    left: 4,
  },
  {
    type: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    features: ["Room", "Air condition", "Bathroom", "TV", "WIFI"],
    price: 282,
    breakfast: true,
    left: 4,
  },
];

function RoomDetailsTable() {
  return (
    <div className="w-full overflow-x-auto font-sans">
      <Table className="min-w-[900px]">
        <TableHeader>
          <TableRow className="!bg-[#009fe3] text-white ">
            <TableHead className="text-white font-semibold text-base text-center">
              Room type
            </TableHead>
            <TableHead className="text-white font-semibold text-base text-center">
              Number of guests
            </TableHead>
            <TableHead className="text-white font-semibold text-base text-center">
              Price for 1 week
            </TableHead>
            <TableHead className="text-white font-semibold text-base text-center">
              Your choices
            </TableHead>
            <TableHead className="text-white font-semibold text-base text-center">
              Select rooms
            </TableHead>
            <TableHead className="text-white font-semibold text-base text-center">
              Your choices
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((room, idx) => (
            <TableRow key={idx} className="bg-white">
              {/* Room type */}
              <TableCell className="align-top lg:max-w-[160px] relative custom-vertical-border pr-4 border-b border-[#A3D0EE]">
                <div className="text-[#009fe3] font-semibold">{room.type}</div>
                <div className="text-xs lg:text-sm my-1 flex items-center gap-x-1 ">
                  {room.beds} <IoBedOutline /> <IoBedOutline />
                </div>
                <div className="text-xs lg:text-sm text-gray-700 flex items-center justify-between">
                  <span className="flex items-center gap-x-1">
                    <MdOutlineBedroomParent />
                    Room{" "}
                  </span>
                  <span className="text-gray-700 flex items-center gap-x-1 ml-8">
                    {" "}
                    <Maximize2 className="w-4 h-4" />
                    {room.size}
                  </span>
                </div>
                <div className="text-xs lg:text-sm mt-1 flex justify-between gap-y-1 ">
                  <div className="flex items-center gap-x-1">
                    <Wind className="w-4 h-4" />
                    <div className="text-gray-700">Air condition</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Bath className="w-4 h-4" />
                    <div className="text-gray-700">Bathroom</div>
                  </div>
                </div>
                <div className="text-xs lg:text-sm mt-1 flex justify-between gap-x-3 gap-y-1">
                  <div className="flex items-center gap-x-1">
                    <Monitor className="w-4 h-4" />
                    <div className="text-gray-700">TV</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Wifi className="w-4 h-4" />
                    <div className="text-gray-700">WIFI</div>
                  </div>
                </div>
              </TableCell>
              {/* Number of guests */}
              <TableCell className="align-center text-center relative custom-vertical-border border-b border-[#A3D0EE]">
                <span className="flex items-center justify-center gap-x-1">
                  <UserRound className="w-4 lg:w-6 h-4 lg:h-6" />
                  <UserRound className="w-4 lg:w-6 h-4 lg:h-6" />
                </span>
              </TableCell>
              {/* Price for 1 week */}
              <TableCell className="align-center text-center  font-bold text-lg lg:text-2xl relative custom-vertical-border border-b border-[#A3D0EE]">
                ${room.price}
              </TableCell>
              {/* Your choices */}
              <TableCell className="align-center text-center text-sm relative custom-vertical-border border-b border-[#A3D0EE]">
                <div>Brekfast included</div>
                <div className="text-red-600 text-xs">
                  Only {room.left} rooms left
                </div>
              </TableCell>
              {/* Select rooms */}
              <TableCell className="align-center text-center relative custom-vertical-border border-b border-[#A3D0EE]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="px-4 py-1 rounded-full border border-gray-300 text-base lg:text-xl font-normal"
                    >
                      0
                      <ChevronDown className="h-5 w-5 text-[#007DD0] bg-gray-200 rounded-full ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="text-center flex items-center justify-center">
                      0
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-center flex items-center justify-center">
                      1
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-center flex items-center justify-center">
                      2
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-center flex items-center justify-center">
                      3
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              {/* Reserve button */}
              <TableCell className="align-center text-center border-b border-[#A3D0EE]">
                <button className="bg-[#009fe3] text-white rounded-full px-8 py-2 font-semibold text-base hover:bg-[#007bbd] transition-colors hover:cursor-pointer">
                  Reserve
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Mobile stacked view */}
      {/* <div className="block md:hidden mt-6 space-y-4">
        {rooms.map((room, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="text-[#009fe3] font-semibold text-lg">{room.type}</div>
            <div className="text-sm my-1">{room.beds} <span role="img" aria-label="bed">🛏️🛏️</span></div>
            <div className="text-xs text-gray-600">{iconMap['Room']} Room <span className="text-gray-400">{room.size}</span></div>
            <div className="text-xs text-gray-600 mt-1 flex flex-wrap gap-x-3 gap-y-1">
              {room.features.slice(1).map(f => (
                <span key={f}>{iconMap[f]} {f}</span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-2xl">👤👤</span>
              <span className="font-bold text-xl">${room.price}</span>
            </div>
            <div className="mt-2 text-sm">
              <div>Brekfast included</div>
              <div className="text-red-600 text-xs">Only {room.left} rooms left</div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <select className="px-2 py-1 rounded-md border border-gray-300">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button
                className="bg-[#009fe3] text-white rounded-full px-6 py-2 font-semibold text-base hover:bg-[#007bbd] transition-colors"
              >
                Reserve
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default RoomDetailsTable;
