import Link from "next/link";
import React from "react";
import { GradientPhoneIcon, PhoneIcon } from "./icons";

interface LinkAtt {
  darkText?: boolean;
  dark?: boolean;
  lightLabel?: boolean;
  multiIcon?: boolean;
  gradient?: boolean;
  defaultLabel?: boolean;
  transparent?: boolean;
}

const PhoneLink = ({
  dark,
  darkText,
  lightLabel,
  multiIcon,
  gradient,
  defaultLabel,
  transparent,
}: LinkAtt) => {
  return (
    <Link
      className="flex items-center gap-2"
      // href={`tel:+${phone.replaceAll("-", "")}`}
      href={`tel:+14695770221`}
    >
      <span
        className={`grid place-items-center min-w-[3.125rem] h-[3.125rem] rounded-full border text-h6 ${
          multiIcon
            ? transparent
              ? ""
              : "bg-white"
            : dark
            ? "border-white text-white "
            : gradient
            ? "bg-gradient-to-b to-[#21D6A2] from-[#4F60E8]"
            : "text-primary"
        }`}
      >
        {multiIcon ? <GradientPhoneIcon /> : <PhoneIcon />}
      </span>
      <div className="flex flex-col gap-2">
        <span
          className={`text-xsm leading-none text-nowrap ${
            lightLabel
              ? "text-primary-foreground"
              : defaultLabel
              ? "text-white"
              : "text-primary"
          }`}
        >
          Call us at
        </span>
        <p
          className={`font-inter text-base text-nowrap font-semibold leading-none ${
            darkText ? "text-toned-dark" : "text-white"
          }`}
        >
          {/* {phone} */}
          +14695770221
        </p>
      </div>
    </Link>
  );
};

export default PhoneLink;
