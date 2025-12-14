import CashIcon from "@/images/cash.png";
import VisaIcon from "@/images/visa.png";
import MastercardIcon from "@/images/mastercard.png";
import Check from "@/images/check.png";
import OACIcon from "@/images/oac_alt.png";

const InformationalFooter = () => {
  return (
    <div>
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
        <img src={CashIcon.src} alt="Cash" />
        <img src={VisaIcon.src} alt="Visa" />
        <img src={MastercardIcon.src} alt="Mastercard" />
        <img src={Check.src} alt="Check" />
        <img src={OACIcon.src} alt="OAC" />
      </div>
    </div>
  );
};

export default InformationalFooter;
