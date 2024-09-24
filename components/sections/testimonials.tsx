"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import Transition from "@/components/ui/text-appear";

const Testimonials = () => {
  const reviews = [
    {
      name: "Michale smith",
      desc: "Sed ut pers piciatis unde omnis iste natus error sit volu ptatem accu santium do lore mque lau dantium, totam rem aperiam, eaque ipsa quae ab illo i n ve nt ore verit atis et quasi archi tecto atae vitae dictasunt explicabo.",
      imageUrl: "/michale.webp",
      rating: "4.9",
    },
    {
      name: "Isabella George",
      desc: "Sed ut pers piciatis unde omnis iste natus error sit volu ptatem accu santium do lore mque lau dantium, totam rem aperiam, eaque ipsa quae ab illo i n ve nt ore verit atis et quasi archi tecto atae vitae dictasunt explicabo.",
      imageUrl: "/isabella.webp",
      rating: "4.9",
    },
    {
      name: "Michale smith",
      desc: "Sed ut pers piciatis unde omnis iste natus error sit volu ptatem accu santium do lore mque lau dantium, totam rem aperiam, eaque ipsa quae ab illo i n ve nt ore verit atis et quasi archi tecto atae vitae dictasunt explicabo.",
      imageUrl: "/michale.webp",
      rating: "4.9",
    },
    {
      name: "Isabella George",
      desc: "Sed ut pers piciatis unde omnis iste natus error sit volu ptatem accu santium do lore mque lau dantium, totam rem aperiam, eaque ipsa quae ab illo i n ve nt ore verit atis et quasi archi tecto atae vitae dictasunt explicabo.",
      imageUrl: "/isabella.webp",
      rating: "4.9",
    },
    {
      name: "Michale smith",
      desc: "Sed ut pers piciatis unde omnis iste natus error sit volu ptatem accu santium do lore mque lau dantium, totam rem aperiam, eaque ipsa quae ab illo i n ve nt ore verit atis et quasi archi tecto atae vitae dictasunt explicabo.",
      imageUrl: "/michale.webp",
      rating: "4.9",
    },
  ];
  return (
    <section className="sm:py-20 pb-14">
      <div className="container">
        <h5 className="text-h5 leading-none text-primary text-center font-semibold">
          <Transition>Testimonials</Transition>
        </h5>
        <h5 className="sm:text-h2 text-h4 text-center font-semibold leading-tight max-w-2xl mx-auto mb-10">
          <Transition>{`What They’re Saying?`}</Transition>
        </h5>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1023: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="!pb-16 pagination_color sm:!mx-0 !mx-2"
        >
          {reviews.map((items, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-white rounded-[0.625rem] overflow-hidden">
                <div className="bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] pt-5 pb-12 pl-6 relative isolate before:absolute before:bg-white before:h-1/3 before:w-[60%] before:bottom-0 before:left-0 before:skew-x-[45deg] before:-translate-x-5">
                  <h5 className="text-h5 text-white font-semibold">
                    <Transition>{items.name}</Transition>
                  </h5>
                </div>
                <div className="px-6 sm:pb-0 pb-4 sm:grid flex sm:grid-cols-5 flex-col-reverse">
                  <div className=" sm:col-span-3">
                    <p className="text-sm text-toned-gray mb-5">{items.desc}</p>
                    <Image
                      src="/qoutes.webp"
                      alt="Qoutes"
                      width={50}
                      height={40}
                    />
                  </div>
                  <div className=" sm:col-span-2 sm:-translate-y-16 -translate-y-6 flex flex-col justify-start items-center w-fit sm:w-full gap-2">
                    <div className="p-[0.9375rem] border border-[#FFE3D6] rounded-full">
                      <Image
                        src={items.imageUrl}
                        alt={items.name}
                        width={110}
                        height={110}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <ul className="flex">
                        <li className="text-[#FFA600] text-[1.375rem]">
                          <IoMdStar />
                        </li>
                        <li className="text-[#FFA600] text-[1.375rem]">
                          <IoMdStar />
                        </li>
                        <li className="text-[#FFA600] text-[1.375rem]">
                          <IoMdStar />
                        </li>
                        <li className="text-[#FFA600] text-[1.375rem]">
                          <IoMdStar />
                        </li>
                        <li className="text-[#FFA600] text-[1.375rem]">
                          <IoMdStar />
                        </li>
                      </ul>
                      <p className="text-toned-gray text-sm">
                        {items.rating} Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
