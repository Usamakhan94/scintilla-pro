import Link from "next/link";
import React from "react";
import { GradientPhoneIcon, PhoneIcon } from "./icons";

interface LinkAtt {
  phone: string;
  darkText?: boolean;
  dark?: boolean;
  lightLabel?: boolean;
  multiIcon?: boolean;
}

const PhoneLink = ({
  phone,
  dark,
  darkText,
  lightLabel,
  multiIcon,
}: LinkAtt) => {
  return (
    <Link
      className="flex items-center gap-2"
      href={`tel:+${phone.replaceAll("-", "")}`}
    >
      <span
        className={`grid place-items-center w-[3.125rem] h-[3.125rem] rounded-full border text-h6 ${
          multiIcon
            ? "bg-white"
            : dark
            ? "border-white text-white bg-black"
            : "text-primary"
        }`}
      >
        {multiIcon ? <GradientPhoneIcon /> : <PhoneIcon />}
      </span>
      <div className="flex flex-col gap-2">
        <span
          className={`text-xsm leading-none ${
            lightLabel ? "text-primary-foreground" : "text-primary"
          }`}
        >
          Call us at
        </span>
        <p
          className={`font-inter text-base font-semibold leading-none ${
            darkText ? "text-toned-dark" : "text-white"
          }`}
        >
          {phone}
        </p>
      </div>
    </Link>
  );
};

export default PhoneLink;
