import Header from "@/components/Header";
import ImageCollage from "@/components/ImageCollage";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bookmark, MoveRight } from "lucide-react";
import Image from "next/image";
import ExploreArea from "../components/ExploreArea";
import GuestReviewsSlider from "@/components/GuestReviewsSlider";
import Policies from "@/components/Policies";
import AlsoLike from "@/components/AlsoLike";
import Footer from "@/components/Footer";
import RoomDetailsTable from "@/components/RoomDetailsTable";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="xl:mx-20 px-2 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
              El Aurassi Hotel
            </h1>
            <p className=" lg:text-lg text-gray-600">
              Spacious, modern rooms with panoramic views of the Mediterranean
              Sea.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Bookmark className="lg:w-12 lg:h-12 w-10 h-10 text-base text-[#007DD0] bg-[#007DD0]/10 rounded-full p-2" />
            <div className="lg:w-12 lg:h-12 w-10 h-10  rounded-full bg-[#007DD0]/10  p-2">
              <Image
                src="/collaboration.png"
                alt="Collaboration"
                width={60}
                height={60}
                className=""
              />
            </div>
            <Button
              variant="ghost"
              className="text-lg lg:text-2xl text-white hover:text-[#007DD0] lg:!px-4 !py-4 lg:!py-5 border rounded-full bg-[#007DD0] hover:cursor-pointer group"
            >
              Reserve
              <ArrowRight className="!w-6 !h-6 text-white group-hover:text-[#007DD0]" />
            </Button>
          </div>
        </div>
        <ImageCollage />

        <Overview />

        <RoomDetailsTable />

        <div className=" flex flex-col gap-1 lg:gap-4 px-2 mt-8 lg:mt-12">
          <h2 className="text-lg lg:text-2xl font-bold">About this property</h2>
          <p className="text-gray-500">
            The Executive Suite at El Aurassi Hotel in Algiers offers a
            luxurious and spacious experience tailored for both business and
            leisure travelers. With its modern design and panoramic views of the
            Mediterranean Sea, the suite combines comfort, elegance, and
            functionality.
          </p>
        </div>
        <ExploreArea />

        <GuestReviewsSlider />

        <Policies />

        <AlsoLike />
      </div>
      <Footer />
    </div>
  );
}
