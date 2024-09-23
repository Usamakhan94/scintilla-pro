"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const navLinks = [
  [
    { href: "#", label: "Home" },
    { href: "#", label: "About us" },
    { href: "#", label: "Packages" },
    { href: "#", label: "Combo packages" },
    { href: "#", label: "Portfolio" },
    { href: "#", label: "Sitemap" },
  ],
  [
    { href: "#", label: "Website design" },
    { href: "#", label: "Logo Design" },
    { href: "#", label: "Ecommerce Solution" },
    { href: "#", label: "Animation" },
    { href: "#", label: "Illustration" },
    { href: "#", label: "NFT Design" },
    { href: "#", label: "Marketing Collateral" },
  ],
  [
    { href: "#", label: "Smm" },
    { href: "#", label: "Creative Copywriting" },
    { href: "#", label: "Mobile apps" },
    { href: "#", label: "SEO Services" },
  ],
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "" },
  { icon: <FaXTwitter />, href: "" },
  { icon: <FaInstagram />, href: "" },
];

const Footer = () => {
  const pathName = usePathname().split("/")[1];
  return (
    <footer
      className="relative lg:h-[550px] sm:h-[600px] h-[700px] bg-black overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 lg:h-[550px] sm:h-[600px] h-[700px] w-full lg:top-[calc(100vh-550px)] sm:top-[calc(100vh-600px)] top-[calc(100vh-700px)]">
        <div className="absolute top-0 left-0 -z-10 ">
          <Image
            src="/swiggler-rotated.svg"
            alt="Skwiggly Line"
            width={420}
            height={200}
          />
        </div>
        <div className="absolute bottom-0 right-0 overflow-hidden -z-10 ">
          <Image
            className=" rotate-180 translate-y-28"
            src="/swiggler-rotated.svg"
            alt="Skwiggly Line"
            width={420}
            height={200}
          />
        </div>
        <div className="container flex flex-col justify-between h-full sm:py-6 py-3 lg:pt-32">
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:mx-0 mx-2">
            <div className="lg:col-span-1 sm:col-span-3 col-span-2 lg:mb-0 mb-4">
              <div className="flex items-end justify-start mb-5">
                <Image
                  src="/footer-logo.svg"
                  alt="Logo"
                  width="260"
                  height="60"
                />
              </div>
              <p className="text-white sm:text-sm text-xsm sm:mb-5 mb-1">
                {`Sed ut pers piciatis unde omnis iste natus error sit volu
do lore mque laudantium, totam rem aperiam, eaquei
atae vitae dictasunt explicabo. `}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-white font-semibold sm:text-h6 text-base ">
                  Follow us on{" "}
                </p>
                <ul className="flex items-center gap-[0.625rem]">
                  {socialLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="sm:w-12 w-8 sm:h-12 h-8 p-2 rounded-full grid place-items-center bg-gradient-to-b from-[#4F60E8] to-[#21D6A2] text-white"
                        >
                          {item.icon}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-start sm:items-center items-start">
              <h6 className="text-body text-white font-semibold leading-none relative sm:pb-5 pb-2 sm:mb-5 mb-2 before:absolute before:bottom-0 before:left-0 before:w-[3.125rem] before:h-[1px] before:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
                Quick Links
              </h6>
              <ul className="flex flex-col xsm:gap-4 gap-2 sm:pl-4">
                {navLinks[0].map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      className={`relative sm:text-sm text-xsm text-white  ${
                        pathName === navItem.href ? "text-white" : ""
                      }`}
                      href={`/${navItem.href}`}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start sm:items-center items-start">
              <h6 className="text-body text-white font-semibold leading-none relative sm:pb-5 pb-2 sm:mb-5 mb-2 before:absolute before:bottom-0 before:left-0 before:w-[3.125rem] before:h-[1px] before:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
                Quick Links
              </h6>
              <ul className="flex flex-col xsm:gap-4 gap-2 sm:pl-8">
                {navLinks[1].map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      className={`relative sm:text-sm text-xsm text-white  ${
                        pathName === navItem.href ? "text-white" : ""
                      }`}
                      href={`/${navItem.href}`}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start sm:items-center items-start sm:col-span-1 col-span-2">
              <h6 className="text-body text-white font-semibold leading-none relative sm:pb-5 pb-2 sm:mb-5 mb-2 before:absolute before:bottom-0 before:left-0 before:w-[3.125rem] before:h-[1px] before:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
                Quick Links
              </h6>
              <ul className="flex sm:flex-col xsm:gap-4 gap-2 sm:pl-8">
                {navLinks[2].map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      className={`relative sm:text-sm text-xsm text-white  ${
                        pathName === navItem.href ? "text-white" : ""
                      }`}
                      href={`/${navItem.href}`}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" border border-white/30 rounded-[0.8125rem] sm:mx-0 mx-2 flex sm:flex-row flex-col items-center justify-between lg:py-6 py-2 md:px-10 px-5 gap-3">
            <p className="xsm:text-sm text-[0.75rem] text-white/80 text-center">
              Copyright© 2024. Aviorsol.com all right reserved
            </p>
            <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-14">
              <div>
                <h6 className="text-toned-gray text-sm font-medium">Email</h6>
                <Link
                  className="text-white font-medium text-body"
                  href="mailto:info@agency.com"
                >
                  info@agency.com
                </Link>
              </div>
              <div>
                <h6 className="text-toned-gray text-sm font-medium">Phone</h6>
                <Link
                  className="text-white font-medium text-body"
                  href="tel:+981122654255"
                >
                  +98 112 2654 255
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
