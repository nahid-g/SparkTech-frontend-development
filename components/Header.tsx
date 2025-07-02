"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, User, MessageSquareDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "#" },
    { name: "House", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="bg-[#E9F6FF] border-b border-gray-200 shadow-sm">
      <div className="xl:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
            <Image
              src="/logo3.png"
              alt="DAYF Booking Logo"
              className="lg:w-10 lg:h-10 w-8 h-8 mr-2"
              width={32}
              height={32}
            />
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600 flex flex-col">
                <span className=" bg-clip-text text-[#00006A]">DAYF</span>
                <span className="mt-[-10px] text-sm text-[#00006A]">
                  BOOKING
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-0.5 xl:space-x-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`  hover:text-blue-600 px-3 py-2 transition-colors duration-200 ${item.href === pathname ? "text-blue-600" : "text-gray-700"}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Right side controls */}
          <div className="hidden lg:flex items-center space-x-4 ">
            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 border rounded-full !border-[#0EB1FD] hover:bg-[#b3e7ff] hover: cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center">
                    <span className="text-xs text-gray-600">€</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-[#007DD0]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <span className="mr-2">€</span> EUR
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">$</span> USD
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">£</span> GBP
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 border rounded-full !border-[#0EB1FD] hover:bg-[#b3e7ff] hover: cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full">🇪🇸</div>
                  <ChevronDown className="h-4 w-4 text-[#007DD0]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <span className="mr-2">🇪🇸</span> Español
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">🇺🇸</span> English
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">🇫🇷</span> Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* List Your Property Button */}
            <Button
              variant="ghost"
              className="text-[#007DD0] border border-[#0EB1FD] hover:bg-[#b3e7ff] hover: cursor-pointer"
            >
              List your property
            </Button>
            <div className="bg-[#FFFFFF]/50 rounded-full p-2">
              <MessageSquareDot className="!h-5 !w-5 text-[#007DD0]" />
            </div>
            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 bg-[#FFFFFF]/50 hover:border rounded-full !border-[#0EB1FD] hover:bg-[#b3e7ff] hover: cursor-pointer"
                >
                  <User className="!h-5 !w-5 text-[#007DD0]" />
                  <span className="text-lg text-[#007DD0]">Sunan</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Bookings</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="bg-[#FFFFFF]/50 rounded-full p-2">
              <MessageSquareDot className="!h-5 !w-5 text-[#007DD0]" />
            </div>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center p-2 bg-[#FFFFFF]/50 hover:border rounded-full !border-[#0EB1FD] hover:bg-[#b3e7ff] hover: cursor-pointer">
                  <User className="!h-5 !w-5 text-[#007DD0]" />
                  {/* <span className="text-lg text-[#007DD0]">Sunan</span> */}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Bookings</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className="!h-6 !w-6 text-[#007DD0]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col justify-center items-center mt-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-[#007DD0] text-lg hover:text-blue-600 px-3 py-2 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="border-t-2 pt-4 mx-auto">
                    <Button
                      variant="ghost"
                      className="text-[#007DD0] border text-base border-[#0EB1FD] hover:bg-[#b3e7ff] hover: cursor-pointer"
                    >
                      List your property
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
