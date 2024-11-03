// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Transition from "@/components/ui/text-appear";

interface PaymentLogos {
  imgUrl?: string;
  title?: string;
}

const logos = [
  { imgUrl: "/payment-logos/visa.png", title: "Visa" },
  { imgUrl: "/payment-logos/mastercard-logo.png", title: "Master Card" },
  { imgUrl: "/payment-logos/paypal.png", title: "Paypal" },
  { imgUrl: "/payment-logos/stripe.png", title: "Stripe" },
  { imgUrl: "/payment-logos/wise.png", title: "Wise" },
  { imgUrl: "/payment-logos/square.png", title: "Square" },
  { imgUrl: "/payment-logos/cashapp.png", title: "Cash app" },
];

const PaymentMethods = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight mb-4">
          <Transition>Available Payment methods</Transition>
        </h2>
        <ul className="flex justify-center items-center flex-wrap gap-4">
          {logos.map((item: PaymentLogos, index: number) => (
            <li key={index}>
              <div className="bg-white grid place-items-center px-5 w-36 h-36 rounded-[2.1875rem]">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="text-center font-medium text-base mt-2">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PaymentMethods;
