import ContactForm from "./contact-form";
import { CheckIcon, CommentIcon } from "./icons";
import Transition from "./text-appear";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PricingDetails {
  title: string;
  packageName: string;
  pricing: string;
  quality?: string;
  listDetails: string[];
  whiteCard?: boolean;
}

const PriceCard = ({
  packageName,
  pricing,
  quality,
  listDetails,
  whiteCard,
}: PricingDetails) => {
  return (
    <div
      className={` transition-all duration-300 hover:shadow-2xl 2xl:p-6 p-4 pt-6 rounded-[0.625rem] relative group ${
        whiteCard ? "bg-white" : "bg-background  hover:bg-white"
      }`}
    >
      <div className="relative flex items-start justify-between isolate">
        <div>
          <Transition>
            <p className="text-primary-foreground text-sm font-medium">
              {packageName}
            </p>
          </Transition>
          <h3 className="text-h3 font-inter font-semibold">
            <Transition>${pricing}</Transition>
          </h3>
        </div>
        <div className="bg-toned-dark px-4 min-h-[5.25rem] rounded-b-full flex flex-col justify-center items-center mr-4 -translate-y-10 group-hover:bg-gradient-to-b from-[#21D6A2] to-[#4F60E8] pricing_card relative before:absolute before:top-0 before:-right-4 before:h-4 before:w-4 before:bg-secondary-foreground group-hover:before:bg-primary-dark">
          <CommentIcon />
          <p className="sm:text-sm text-xsm text-white">Live Chat</p>
        </div>
      </div>
      <Transition>
        <p className="text-sm text-toned-gray mb-6">{quality}</p>
      </Transition>
      <ul
        className={`rounded-[0.625rem] 2xl:px-5 px-3 py-8 transition-all duration-300 ${
          whiteCard ? "bg-background" : "bg-white group-hover:bg-background"
        }`}
      >
        {listDetails.map((listItem: string, index: number) => (
          <li
            key={index}
            className="sm:text-sm text-xsm text-toned-gray flex items-center gap-1 last:mb-0 mb-3"
          >
            <span>
              <CheckIcon />
            </span>
            <span>{listItem}</span>
          </li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger className="bg-toned-dark w-full text-body font-semibold rounded-[0.75rem] grid place-items-center transition-all  duration-300 text-white mt-3 min-h-[3.125rem] group-hover:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
          Order Now
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="hidden"></DialogTitle>
            <DialogDescription>
              <p className="text-primary-foreground text-sm font-medium">
                {packageName}
              </p>
              <h3 className="text-h3 font-inter font-semibold">
                <Transition>${pricing}</Transition>
              </h3>
              <ContactForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PriceCard;
