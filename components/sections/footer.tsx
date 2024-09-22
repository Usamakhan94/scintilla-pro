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
      className="relative h-[550px] bg-black overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[550px] w-full top-[calc(100vh-550px)]">
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
        <div className="container flex flex-col justify-between h-full py-6 pt-32">
          <div className="grid grid-cols-4">
            <div>
              <div className="flex items-end justify-start mb-5">
                <Image src="/logo.png" alt="Logo" width="260" height="60" />
              </div>
              <p className="text-white text-sm mb-5">
                {`Sed ut pers piciatis unde omnis iste natus error sit volu
do lore mque laudantium, totam rem aperiam, eaquei
atae vitae dictasunt explicabo. `}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-white font-semibold text-h6 ">
                  Follow us on{" "}
                </p>
                <ul className="flex items-center gap-[0.625rem]">
                  {socialLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="w-12 h-12 p-2 rounded-full grid place-items-center bg-gradient-to-b from-[#4F60E8] to-[#21D6A2] text-white"
                        >
                          {item.icon}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <h6 className="text-body text-white font-semibold leading-none relative pb-5 mb-5 before:absolute before:bottom-0 before:left-0 before:w-[3.125rem] before:h-[1px] before:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
                Quick Links
              </h6>
              <ul className="flex flex-col xsm:gap-4 gap-2 pl-4">
                {navLinks[0].map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      className={`relative text-sm text-white  ${
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
            <div className="flex flex-col justify-start items-center">
              <h6 className="text-body text-white font-semibold leading-none relative pb-5 mb-5 before:absolute before:bottom-0 before:left-0 before:w-[3.125rem] before:h-[1px] before:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
                Quick Links
              </h6>
              <ul className="flex flex-col xsm:gap-4 gap-2 pl-8">
                {navLinks[1].map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      className={`relative text-sm text-white  ${
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
            <div className="flex flex-col justify-start items-center">
              <h6 className="text-body text-white font-semibold leading-none relative pb-5 mb-5 before:absolute before:bottom-0 before:left-0 before:w-[3.125rem] before:h-[1px] before:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
                Quick Links
              </h6>
              <ul className="flex flex-col xsm:gap-4 gap-2 pl-8">
                {navLinks[2].map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      className={`relative text-sm text-white  ${
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
          <div className=" border border-white/30 rounded-[0.8125rem] flex items-center justify-between py-6 px-10 gap-3">
            <p className="xsm:text-sm text-[0.75rem] text-white/80 text-center">
              Copyright© 2024. Aviorsol.com all right reserved
            </p>
            <div className="flex items-center gap-14">
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
