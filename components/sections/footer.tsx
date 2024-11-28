"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa6";

const navLinks = [
  [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About us" },
    { href: "/packages", label: "Packages" },
    { href: "/combo-packages", label: "Combo packages" },
    { href: "#", label: "Portfolio" },
  ],
  [
    { href: "/services/web-development", label: "Website Development" },
    { href: "/services/logo-design", label: "Logo Design" },
    { href: "/services/ecommerce", label: "Ecommerce Solution" },
    { href: "/services/video-animation", label: "Animation" },
    { href: "/services/illustration", label: "Illustration" },
    { href: "/services/nft-design", label: "NFT Design" },
    { href: "/services/marketing-collateral", label: "Marketing Collateral" },
  ],
  [
    { href: "/services/social-media-marketing", label: "SMM" },
    { href: "/services/creative-copywriting", label: "Creative Copywriting" },
    { href: "/services/app-development", label: "Mobile apps" },
    { href: "/services/seo-services", label: "SEO Services" },
  ],
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=61567302922805",
  },
  { icon: <FaPinterestP />, href: "https://tr.pinterest.com/scintillaproai/" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/scintilla.pro/" },
];

const Footer = () => {
  const pathName = usePathname().split("/")[1];
  return (
    <>
      <footer
        className="relative lg:h-[650px] sm:h-[800px] h-[950px] bg-black overflow-hidden sm:block hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 lg:h-[650px] sm:h-[800px] h-[950px] w-full lg:top-[calc(100vh-650px)] sm:top-[calc(100vh-800px)] top-[calc(100vh-950px)]">
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
                    width="300"
                    height="60"
                  />
                </div>
                <p className="text-white sm:text-sm text-xsm sm:mb-5 mb-1">
                  {`Full-stack Web, Mobile Design and Development Company. `}
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
                            target="_blank"
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
            <div className=" border border-white/30 rounded-[0.8125rem] sm:mx-0 mx-2 flex lg:flex-row flex-col items-center justify-between lg:py-6 py-2 md:px-4 px-5 gap-3">
              <p className="xsm:text-sm text-[0.75rem] text-white/80 text-center">
                Copyright© 2024. Scintillapro.com all right reserved
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Link
                  className="text-white sm:border-r-2 sm:border-white/50 pr-2"
                  href="/privacy"
                >
                  Privacy
                </Link>
                <Link
                  className="text-white sm:border-r-2 sm:border-white/50 pr-2"
                  href="/terms"
                >
                  Terms Of Use
                </Link>
                <Link
                  className="text-white sm:border-r-2 sm:border-white/50 pr-2"
                  href="/refund"
                >
                  Refund
                </Link>
                <Link className="text-white" href="/support">
                  Customer Support
                </Link>
              </div>
              <div className="flex sm:flex-row flex-col sm:items-center items-start xl:gap-14 sm:gap-3">
                <div>
                  <h6 className="text-toned-gray text-sm font-medium">
                    Address
                  </h6>
                  <Link className="text-white font-medium text-body" href="">
                    5900 Balcones Drive # 17341 <br /> Austin, TX 78731
                  </Link>
                </div>
                <div>
                  <h6 className="text-toned-gray text-sm font-medium">Email</h6>
                  <Link
                    className="text-white font-medium text-body"
                    href="mailto:info@scintillapro.com"
                  >
                    info@scintillapro.com
                  </Link>
                </div>
                <div>
                  <h6 className="text-toned-gray text-sm font-medium">Phone</h6>
                  <Link
                    className="text-white font-medium text-body"
                    href="tel:+14695770221"
                  >
                    +14695770221
                  </Link>
                </div>
              </div>
            </div>
            <div className=" border border-white/30 rounded-[0.8125rem] sm:mx-0 mx-2 mt-2 flex flex-col items-center justify-center lg:py-6 py-2 md:px-4 px-5 gap-3">
              <p className="text-body font-medium text-white">Disclaimer:</p>
              <p className="text-xsm text-center text-toned-gray">
                {`Logo, portfolio, images and content are sole property of Scintillapro.
              All third party company names, brand names, trademarks displayed
              on this website are the property of their respective owners.
              Furthermore, Scintillapro has no influence over the third party
              material that is being displayed on the website. Therefore, we are
              also not responsible for any resemblance with any other material
              on the web. These portfolios and case studies are actual but
              exemplary (for better understanding); the actual names, designs,
              functionality, content and stats/facts may differ from the actual
              projects. This is due to the strict NDA policy that Scintillapro
              adheres to.`}
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="relative bg-black overflow-hidden sm:hidden">
        <div className="relative isolate">
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
                    width="300"
                    height="60"
                  />
                </div>
                <p className="text-white sm:text-sm text-xsm sm:mb-5 mb-1">
                  {`Full-stack Web, Mobile Design and Development Company. `}
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
                            target="_blank"
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
            <div className=" border border-white/30 rounded-[0.8125rem] sm:mx-0 mx-2 flex lg:flex-row flex-col items-center justify-between lg:py-6 py-2 md:px-4 px-5 gap-3">
              <p className="xsm:text-sm text-[0.75rem] text-white/80 text-center">
                Copyright© 2024. Scintillapro.com all right reserved
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Link
                  className="text-white sm:border-r-2 sm:border-white/50 pr-2"
                  href="/privacy"
                >
                  Privacy
                </Link>
                <Link
                  className="text-white sm:border-r-2 sm:border-white/50 pr-2"
                  href="/terms"
                >
                  Terms Of Use
                </Link>
                <Link
                  className="text-white sm:border-r-2 sm:border-white/50 pr-2"
                  href="/refund"
                >
                  Refund
                </Link>
                <Link className="text-white" href="/support">
                  Customer Support
                </Link>
              </div>
              <div className="flex sm:flex-row flex-col sm:items-center items-start xl:gap-14 sm:gap-3">
                <div>
                  <h6 className="text-toned-gray text-sm font-medium">
                    Address
                  </h6>
                  <Link className="text-white font-medium text-body" href="">
                    5900 Balcones Drive # 17341 <br /> Austin, TX 78731
                  </Link>
                </div>
                <div>
                  <h6 className="text-toned-gray text-sm font-medium">Email</h6>
                  <Link
                    className="text-white font-medium text-body"
                    href="mailto:info@scintillapro.com"
                  >
                    info@scintillapro.com
                  </Link>
                </div>
                <div>
                  <h6 className="text-toned-gray text-sm font-medium">Phone</h6>
                  <Link
                    className="text-white font-medium text-body"
                    href="tel:+14695770221"
                  >
                    +14695770221
                  </Link>
                </div>
              </div>
            </div>
            <div className=" border border-white/30 rounded-[0.8125rem] sm:mx-0 mx-2 mt-2 flex flex-col items-center justify-center lg:py-6 py-2 md:px-4 px-5 gap-3">
              <p className="text-body font-medium text-white">Disclaimer:</p>
              <p className="text-xsm text-center text-toned-gray">
                {`Logo, portfolio, images and content are sole property of Scintillapro.
              All third party company names, brand names, trademarks displayed
              on this website are the property of their respective owners.
              Furthermore, Scintillapro has no influence over the third party
              material that is being displayed on the website. Therefore, we are
              also not responsible for any resemblance with any other material
              on the web. These portfolios and case studies are actual but
              exemplary (for better understanding); the actual names, designs,
              functionality, content and stats/facts may differ from the actual
              projects. This is due to the strict NDA policy that Scintillapro
              adheres to.`}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
