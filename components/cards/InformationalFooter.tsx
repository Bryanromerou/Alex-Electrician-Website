import CashIcon from "@/images/icons/cash.png";
import VisaIcon from "@/images/icons/visa.png";
import MastercardIcon from "@/images/icons/mastercard.png";
import Check from "@/images/icons/check.png";
import OACIcon from "@/images/icons/oac_alt.png";

const InformationalFooter = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center my-4">
      <div className="flex flex-row gap-2">
        <p>
          Phone Number: <span className="underline">626-505-0596</span>
        </p>
        |
        <p>
          Email: <span className="underline">info@azheatingandair.com</span>
        </p>
      </div>
      <p>Hours: Available 24/7</p>
      <p>CA ST LIC # 1121119</p>
      <div className="flex flex-row gap-2">
        <img src={CashIcon.src} alt="Cash" className="w-12 h-fit" />
        <img src={VisaIcon.src} alt="Visa" className="w-12 h-fit" />
        <img src={MastercardIcon.src} alt="Mastercard" className="w-12 h-fit" />
        <img src={Check.src} alt="Check" className="w-12 h-fit" />
        <img src={OACIcon.src} alt="OAC" className="w-12 h-fit" />
      </div>
    </div>
  );
};

export default InformationalFooter;
