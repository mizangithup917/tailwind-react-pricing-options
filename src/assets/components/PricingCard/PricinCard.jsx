import React from 'react';
import PricingFeatures from './PricingFeature';
import PricingFeature from './PricingFeature';

const PricinCard = ({pricing}) => {
  const {name, price, description, features} = pricing;
  return (
    <div  className='border bg-amber-600 rounded-2xl p-4'>
      {/* card header */}
      <div>
        <h1 className='text-4xl'>{name}</h1>
        <h1 className='text-2xl'>{price}</h1>
      </div>
      {/* card body */}
      <div className='bg-amber-200 p-4 rounded-2xl mt-10'>
        <p>{description}</p>
        {
          features.map((feature, index) => <PricingFeature 
          key={index}
          feature={feature}></PricingFeature>)
        }
      </div>

    </div>
  );
};

export default PricinCard;