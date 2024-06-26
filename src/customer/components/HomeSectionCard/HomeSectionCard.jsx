import React from 'react';

const HomeSectionCard = ({ product }) => {
  return (
    <div className='group relative overflow-hidden bg-white rounded-lg shadow-lg w-[15rem] mx-3 border border-gray-300 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl'>
      <div className='h-[13rem]'>
        <img
          className='object-cover w-full h-full'
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300'>{product.brand}</h3>
        <p className='text-sm text-gray-700 mb-4'>{product.title}</p>
        <div className='flex items-center justify-between'>
          <p className='text-gray-900 font-medium text-lg'>$ {product.price}</p>
          <button className='bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
