import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const reviews = [
  {
    title: "Breathtaking Views and Luxury Comfort!",
    text:
      "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
    rating: 5,
    author: "Sofia B., France",
    date: "23.10.2024",
  },
  {
    title: "Exceptional Stay with Excellent Amenities",
    text:
      "The Executive Suite provided an exceptional experience. The room was spotless, equipped with everything you could need. The marble bathroom with its bathtub was pure luxury. The location is perfect for exploring the city, and the staff truly make you feel welcome.",
    rating: 5,
    author: "Youssef R., Morocco",
    date: "04.11.2024",
  },
  {
    title: "Perfect Blend of Business and Leisure",
    text:
      "As a business traveler, I was impressed by the Executive Suite's functionality. The workspace was well-equipped, the WiFi was lightning-fast, and the room service was impeccable. After work, I could unwind in the luxurious bathroom and enjoy the stunning sea views. The staff went above and beyond to ensure my comfort.",
    rating: 5,
    author: "Michael T., United States",
    date: "15.11.2024",
  },
  {
    title: "Unforgettable Luxury Experience",
    text:
      "This Executive Suite is the epitome of luxury! From the moment I walked in, I was captivated by the elegant design and attention to detail. The king-size bed was incredibly comfortable, the bathroom amenities were premium quality, and the balcony offered the most spectacular sunset views. The hotel's location made exploring Algiers so convenient.",
    rating: 5,
    author: "Aisha K., United Kingdom",
    date: "08.12.2024",
  },
  {
    title: "Exceeded Every Expectation",
    text:
      "I've stayed in many luxury hotels, but the Executive Suite at El Aurassi stands out. The room was immaculate, the service was exceptional, and the views were simply breathtaking. The marble bathroom with separate shower and bathtub was a dream. The staff remembered my preferences and made me feel like a VIP throughout my stay.",
    rating: 5,
    author: "Carlos M., Spain",
    date: "03.01.2025",
  },
  {
    title: "A Home Away from Home",
    text:
      "The Executive Suite felt like my own private oasis. The spacious layout, modern amenities, and thoughtful touches made my week-long stay incredibly comfortable. The housekeeping team was discreet yet thorough, and the concierge helped me discover amazing local restaurants. The sea views from my room were the perfect way to start and end each day.",
    rating: 5,
    author: "Emma L., Canada",
    date: "20.01.2025",
  },
  {
    title: "Luxury Redefined",
    text:
      "This Executive Suite redefines what luxury accommodation should be. The attention to detail is remarkable - from the premium linens to the high-end toiletries. The room's layout maximizes both comfort and functionality. The staff's professionalism and warmth made my business trip feel like a vacation. I can't wait to return!",
    rating: 5,
    author: "Ahmed S., Egypt",
    date: "12.02.2025",
  },
];

export default function GuestReviewsSlider() {
  return (
    <div className="mt-12 px-2 lg:px-0">
      <div className="flex items-center justify-between mb-20">
        <h2 className="text-lg lg:text-2xl font-bold">What Our Guests Say</h2>
        <a
          href="#"
          className="flex items-center gap-2 text-[#007DD0] lg:text-lg font-medium border-b-2 border-[#007DD0] pb-1 hover:underline"
        >
          See All.. <ArrowRight className="w-5 h-5" />
        </a>
      </div>
      <div className="relative ">
        <Carousel
          className="w-full"
          opts={{ align: "start", slidesToScroll: 1 }}
        >
          <CarouselContent className="flex-nowrap">
            {reviews.map((review, idx) => (
              <CarouselItem
                key={idx}
                className="flex-1 min-w-[100%] sm:min-w-[50%] flex gap-6"
              >
                <div
                  className="bg-white border rounded-xl p-6 flex-1 shadow-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="text-lg lg:text-xl font-bold mb-2">
                      “{review.title}”
                    </div>
                    <div className="text-gray-500 text-sm mb-2">{review.text}</div>
                  </div>
                  <div className="mt-auto flex flex-col gap-1 lg:gap-2">
                    <div className="flex items-center gap-1 ">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <span key={idx} className="text-[#FFC107] text-xl lg:text-3xl">★</span>
                      ))}
                    </div>
                    <div className="flex justify-between gap-1">
                      <div className="text-base lg:text-lg font-medium text-gray-800">— {review.author}</div>
                      <div className="text-sm lg:text-base text-right text-gray-400">{review.date}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-4 sm:left-20 top-[-40px] lg:w-12 lg:h-12 w-10 h-10 -translate-y-1/2 bg-[#E6F2FB] text-[#007DD0] border-none shadow-none hover:bg-gray-200 disabled:opacity-100 disabled:bg-gray-100 disabled:text-gray-300 hover:cursor-pointer"
          />
          <CarouselNext
            className="left-20 sm:left-44 top-[-40px] lg:w-12 lg:h-12 w-10 h-10 -translate-y-1/2 bg-[#E6F2FB] text-[#007DD0] border-none shadow-none hover:bg-gray-200 disabled:opacity-100 disabled:bg-gray-100 disabled:text-gray-300 hover:cursor-pointer"
          />
        </Carousel>
      </div>
    </div>
  );
} 