"use client";
import { CgSmartphone } from "react-icons/cg";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  type ContactDetails = {
    name: string;
    email: string;
    phone: string;
  };

  const [formData, setFormData] = useState<ContactDetails>({
    name: "",
    email: "",
    phone: "",
  });

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };
  return (
    <form
      action=""
      className="flex flex-col gap-[0.875rem] mt-[0.875rem]"
      onSubmit={handleFormSubmit}
    >
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 bg-white shadow-lg w-9 h-9 rounded-full grid place-items-center left-2 pointer-events-none">
          <LuUser />
        </span>
        <input
          type="text"
          className="w-full bg-background !shadow-none outline-none h-[3.125rem] rounded-full pl-14 text-toned-gray placeholder:opacity-45"
          placeholder="Enter you name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
      </div>
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 bg-white shadow-lg w-9 h-9 rounded-full grid place-items-center left-2 pointer-events-none">
          <IoMailOpenOutline />
        </span>
        <input
          type="email"
          className="w-full bg-background !shadow-none outline-none h-[3.125rem] rounded-full pl-14 text-toned-gray placeholder:opacity-45"
          placeholder="Enter you email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
      </div>
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 bg-white shadow-lg w-9 h-9 rounded-full grid place-items-center left-2 pointer-events-none">
          <CgSmartphone />
        </span>
        <input
          type="tel"
          className="w-full bg-background !shadow-none outline-none h-[3.125rem] rounded-full pl-14 text-toned-gray placeholder:opacity-45"
          placeholder="Enter you phone"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
        />
      </div>
      <Button className="w-fit min-w-[10.625rem] justify-between" size="icon">
        Send Now
        <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
          <ArrowRight />
        </span>
      </Button>
    </form>
  );
};

export default ContactForm;
