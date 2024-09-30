"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoMailOpenOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu4Line } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import servicesList from "@/app/services-content";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [sheetVisible, setSheetVisible] = useState(true);
  const Navlinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about-us" },
    { label: "Services", href: "" },
    { label: "Packages", href: "/packages" },
  ];
  const servicesPages = Object.keys(servicesList);

  const pathname = usePathname();
  useEffect(() => {
    setSheetVisible(false);
    const timerReturn = setTimeout(() => {
      setSheetVisible(true);
    }, 100);
    return () => clearTimeout(timerReturn);
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-white shadow-xl py-2">
      <nav>
        <div className="container">
          <div className="hidden lg:grid grid-cols-3 ">
            <div className="relative">
              <Image src="/logo.svg" alt="Logo" width="220" height="60" />
              <Link
                href="/"
                className="bg-white shadow-2xl xl:w-[60%]  flex items-center justify-center py-3 px-4 rounded-bl-[30px] rounded-br-[30px] absolute -top-2 left-0"
              >
                <Image
                  className="max-w-[200px]"
                  unoptimized
                  src="/top-logo.svg"
                  alt="Logo"
                  width="260"
                  height="60"
                />
              </Link>
            </div>
            <ul className="flex justify-center items-center gap-8">
              {Navlinks.map((navlink, index) => {
                return navlink.label === "Services" ? (
                  <li
                    key={index}
                    className="relative py-3 isolate group capitalize"
                  >
                    <span>{navlink.label}</span>
                    <div className="absolute top-12 left-0 bg-white flex flex-col p-2 border rounded-[15px] px-4 origin-top scale-y-0 transition-all group-hover:scale-y-100 duration-500">
                      {servicesPages.map((item, index) => (
                        <Link
                          key={index}
                          href={`/services/${item}`}
                          className="text-nowrap"
                        >
                          {item.replace("-", " ")}
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={index}>
                    <Link className="text-nowrap py-3" href={navlink.href}>
                      {navlink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-end items-center">
              <Button
                size="icon"
                className="h-12 sm:text-sm min-w-[10.875rem] gap-1 items-center justify-center"
              >
                <span className="text-white text-base">
                  <IoMailOpenOutline />
                </span>{" "}
                Send a message
              </Button>
            </div>
          </div>
          <div className="lg:hidden flex items-center justify-between mx-2">
            <Link href="/" className="sm:max-w-full max-w-[210px]">
              <Image src="/logo.svg" alt="Logo" width="260" height="60" />
            </Link>
            {sheetVisible && (
              <Sheet>
                <SheetTrigger className="text-h5">
                  <RiMenu4Line />
                </SheetTrigger>
                <SheetContent className="bg-white flex flex-col">
                  <SheetTitle className="hidden"></SheetTitle>
                  <ul className="flex flex-col justify-start items-center gap-8 mt-8">
                    {Navlinks.map((navlink, index) => {
                      return navlink.label === "Services" ? (
                        <li key={index}>
                          <Popover>
                            <PopoverTrigger>
                              <span>{navlink.label}</span>
                            </PopoverTrigger>
                            <PopoverContent className="bg-white flex flex-col w-fit gap-2">
                              {servicesPages.map((item, index) => (
                                <Link
                                  key={index}
                                  href={`/services/${item}`}
                                  className="text-nowrap capitalize"
                                >
                                  {item.replace("-", " ")}
                                </Link>
                              ))}
                            </PopoverContent>
                          </Popover>
                        </li>
                      ) : (
                        <li key={index}>
                          <Link
                            className="text-nowrap py-3"
                            href={navlink.href}
                          >
                            {navlink.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    size="icon"
                    className="h-12 sm:text-sm min-w-[10.875rem] gap-1 items-center justify-center mt-3"
                  >
                    <span className="text-white text-base">
                      <IoMailOpenOutline />
                    </span>{" "}
                    Send a message
                  </Button>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
