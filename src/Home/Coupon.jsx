import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const coupons = [
  { service: "Cloud Hosting", discount: 30, code: "CLOUD30", expiry: "Feb 28, 2025" },
  { service: "API Subscription", discount: 20, code: "API20", expiry: "Mar 10, 2025" },
  { service: "Pro Membership", discount: 50, code: "PRO50", expiry: "Mar 5, 2025" },
];

const CouponSection = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-teal-400 to-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">🔥 Exclusive Deals for Infra Sync Members!</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {coupons.map((coupon, index) => (
          <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-5 rounded-xl shadow-lg border border-gray-500 text-center">
            <h3 className="text-lg font-bold">{coupon.service} - {coupon.discount}% OFF</h3>
            <p className="text-sm text-gray-300">Expires: {coupon.expiry}</p>
            
            <div className="flex items-center justify-between bg-gray-900 text-white p-2 rounded-md my-3">
              <span className="font-mono">{coupon.code}</span>
              <button onClick={() => handleCopy(coupon.code)} className="tooltip" data-tip="Copy Code">
                <FaCopy className="text-xl hover:text-blue-400" />
              </button>
            </div>

            {copiedCode === coupon.code && <p className="text-green-400 text-sm">Copied to clipboard!</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponSection;
