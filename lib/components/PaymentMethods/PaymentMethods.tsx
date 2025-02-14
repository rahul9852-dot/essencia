import React from 'react';
import Image from 'next/image';

const PAYMENT_METHODS = [
  {
    id: 'visa',
    name: 'Visa',
    icon: '/payment-icons/visa.svg',
    width: 45,
    height: 30,
  },
  {
    id: 'mastercard',
    name: 'Mastercard',
    icon: '/payment-icons/mastercard.svg',
    width: 45,
    height: 30,
  },
  {
    id: 'amex',
    name: 'American Express',
    icon: '/payment-icons/amex.svg',
    width: 45,
    height: 30,
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: '/payment-icons/paypal.svg',
    width: 45,
    height: 30,
  },
  {
    id: 'diners',
    name: 'Diners Club',
    icon: '/payment-icons/diners.svg',
    width: 45,
    height: 30,
  },
  {
    id: 'discover',
    name: 'Discover',
    icon: '/payment-icons/discover.svg',
    width: 45,
    height: 30,
  },
];

const PaymentMethods = () => {
  return (
    <div className="flex items-center -mx-1.5">
      {PAYMENT_METHODS.map(method => (
        <div key={method.id} className="px-1.5 group">
          <div
            className="w-[45px] h-[28px] relative grayscale hover:grayscale-0 
            transition-all duration-300 transform hover:scale-110 cursor-pointer
            hover:z-10 bg-white/5 rounded-[3px] overflow-hidden"
          >
            <Image
              src={method.icon}
              alt={`${method.name} payment method`}
              fill
              className="object-contain p-[3px] opacity-80 group-hover:opacity-100 
                transition-all duration-300"
              sizes="45px"
              priority={method.id === 'visa'}
            />
            <div
              className="absolute inset-0 bg-black/5 group-hover:bg-transparent 
              transition-colors duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
