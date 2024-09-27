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

const NavBar = () => {
  const Navlinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
  ];
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-white shadow-xl py-2">
      <nav>
        <div className="container">
          <div className="hidden lg:grid grid-cols-3 ">
            <div className="relative">
              <Image src="/logo.svg" alt="Logo" width="220" height="60" />
              <div className="bg-white shadow-2xl xl:w-[60%]  flex items-center justify-center py-3 px-4 rounded-bl-[30px] rounded-br-[30px] absolute -top-2 left-0">
                <Image
                  className="max-w-[200px]"
                  unoptimized
                  src="/top-logo.svg"
                  alt="Logo"
                  width="260"
                  height="60"
                />
              </div>
            </div>
            <ul className="flex justify-center items-center gap-8">
              {Navlinks.map((navlink, index) => (
                <li key={index}>
                  <Link href={navlink.href}>{navlink.label}</Link>
                </li>
              ))}
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
            <div className="sm:max-w-full max-w-[210px]">
              <Image src="/logo.svg" alt="Logo" width="260" height="60" />
            </div>
            <Sheet>
              <SheetTrigger className="text-h5">
                <RiMenu4Line />
              </SheetTrigger>
              <SheetContent className="bg-white">
                <SheetTitle className="hidden"></SheetTitle>
                <ul className="flex flex-col justify-start items-center gap-8 mt-8">
                  {Navlinks.map((navlink, index) => (
                    <li key={index}>
                      <Link href={navlink.href}>{navlink.label}</Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
