"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const page = () => {
  const reviews = [
    {
      name: "Samantha Manning",
      desc: "I found Scintillapro to be easy to use and with just a click. These guys helped me to decide on which logo I wanted for my business. Scintillapro has made my business look more professional and meaningful!",
      imageUrl: "/testimonials/r-1.webp",
      rating: "5",
    },
    {
      name: "Sean Bishop",
      desc: "I would like to thank Scintillapro for making my life easier. These guys are really fantastic in their work, they are very creative and they have the best CSS and jQuery skills. Very impressed with their professionalism!",
      imageUrl: "/testimonials/r-2.webp",
      rating: "5",
    },
    {
      name: "Kai Barry",
      desc: "Overall, I’m very satisfied with the service I received. The customer support team helped me secure a logo for my future business venture. I wanted a logo on the website, paid for it and got it timely. Also some nice business cards. Appreciate the service and highly recommended!",
      imageUrl: "/testimonials/r-3.webp",
      rating: "5",
    },
    {
      name: "Ray Gregory",
      desc: "Amazing to work with them! Quick turnaround, professional and keep you up to date throughout your project! And I love my new logo and website design! I highly recommend working with Scintillapro!",
      imageUrl: "/testimonials/r-4.webp",
      rating: "5",
    },
    {
      name: "Liam Thompson",
      desc: "Scintillapro is one of the most professional digital companies I've ever dealt with. Their customer service is second to none and their work is timely and of the highest quality. They are highly recommended from my side.",
      imageUrl: "/testimonials/r-5.webp",
      rating: "5",
    },
    {
      name: "Mathew Ramsey",
      desc: "Scintillapro has an outstanding web designers & developers team! They designed and develop a new website for our company. Their portfolio is stunning and I would highly recommend them to anyone who's looking to get a professional, operative, attractive website! Thank you!",
      imageUrl: "/testimonials/r-6.webp",
      rating: "5",
    },
  ];
  return (
    <>
      <section
        className="bg-no-repeat bg-cover lg:pt-[12.5rem] lg:pb-[8.5rem] pt-[6.5rem] pb-[4.5rem] isolate relative lg:px-0 px-2"
        style={{
          backgroundImage: "url(/reviews/about_bnr-img.png)",
          backgroundColor: "rgba(0, 0, 0, 0.94)",
        }}
      >
        <div className="absolute top-0 left-0 -z-10 ">
          <Image
            src="/swiggler-rotated.svg"
            alt="Skwiggly Line"
            width={420}
            height={200}
          />
        </div>
        <div className="container">
          <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-8">
            <div className="lg:max-w-[37rem]">
              <h5 className="text-h5 leading-none text-primary text-left font-semibold">
                <Transition>{`Clients Love Us`}</Transition>
              </h5>
              <h1 className="md:text-h1 sm:text-h2 text-h4 text-white font-semibold leading-tight mb-4">
                <Transition>{`We listen to our client’s feedback & improvise.`}</Transition>
              </h1>
              <Transition>
                <p className="text-white text-sm  mb-5">
                  {`We are a team of creative thinkers and problem solvers dedicated to pushing the limits of what is possible by helping brands achieve their goals.`}
                </p>
              </Transition>
              <Button className="" size="icon">
                Request a demo{" "}
                <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                  <ArrowRight />
                </span>
              </Button>
            </div>
            <div className="relative isolate xl:scale-100 xl:translate-x-0 xl:translate-y-0 lg:scale-125 lg:-translate-x-20  lg:translate-y-32">
              <Image
                src="/reviews_hero-img.png"
                alt="Hero Image"
                width={800}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sm:py-20 pb-14">
        <div className="container">
          <h5 className="text-h5 leading-none text-primary text-center font-semibold">
            <Transition>{`This Is What Industry’s`}</Transition>
          </h5>
          <h5 className="sm:text-h2 text-h4 text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
            <Transition>{`Top Clientele Sounds Like`}</Transition>
          </h5>
          <Transition>
            <p className="text-muted-gray text-sm text-center mb-5 lg:max-w-[37rem] mx-auto">
              {`On one hand, we strive to outperform excellence in our processes and business behaviors for unceasing success, while on the other
hand, we place customer satisfaction as the utmost priority. our main aim is to foster a culture that not only focuses on providing
innovative solutions to present technology ecosystem but also reinvent the future.`}
            </p>
          </Transition>
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
                  <div className="bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] pt-5 pb-12 pl-6 relative isolate before:absolute before:bg-white before:h-1/3 before:w-[60%] before:-bottom-[1px] before:left-0 before:skew-x-[45deg] before:-translate-x-5">
                    <h5 className="text-h5 text-white font-semibold">
                      <Transition>{items.name}</Transition>
                    </h5>
                  </div>
                  <div className="px-6 sm:pb-0 pb-4 sm:grid flex sm:grid-cols-5 flex-col-reverse">
                    <div className=" sm:col-span-3">
                      <p className="text-sm text-toned-gray mb-5">
                        {items.desc}
                      </p>
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
    </>
  );
};

export default page;
