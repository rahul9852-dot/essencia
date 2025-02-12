import React from 'react';
const DreamerProduct = () => {
  const dreamerProduct = [
    {
      id: 1,
      img: '/aboutUs/purseImg.webp',
      title: 'Black Leather jacket',
      description:
        'These are comfortable clothes that are suitable for everyday.',
    },
    {
      id: 2,
      img: '/aboutUs/backImg.webp',
      title: 'Women t-shirt dress',
      description:
        'These are comfortable clothes that are suitable for everyday.',
    },
    {
      id: 3,
      img: '/aboutUs/womenImg.webp',
      title: 'Winter clothes',
      description:
        'These are comfortable clothes that are suitable for everyday.',
    },
  ];
  return (
    <div className="bg-navbarBg-500 px-8 py-16">
      <div className="flex flex-col mb-4">
        <p className="text-4xl font-light text-white mb-8 text-center">
          Banking for the dreamers Product
        </p>
        <div className="flex items-center justify-center gap-4">
          {dreamerProduct.map(product => (
            <div key={product.id}>
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <p className="text-white">{product.title}</p>
              <p className="text-white">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DreamerProduct;
