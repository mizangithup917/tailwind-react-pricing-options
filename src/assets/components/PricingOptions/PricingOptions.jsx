import React, { use } from 'react';
import PricinCard from '../PricingCard/PricinCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOptions = ({pricingPromise}) => {

const pricingData = use(pricingPromise);
 

  return (
    <div>
        <h2 className='text-5xl mb-10'>Get our Membership</h2>
        <div className='grid md:grid-cols-3 gap-8 mx-auto'>
          {
            pricingData.map(pricing => <PricinCard 
              key={pricing.id}
              pricing={pricing}></PricinCard>)
          }

          {
            pricingData.map(pricing=><DaisyCard
            key={pricing.id}
            pricing={pricing}></DaisyCard>)
          }
        </div>
    </div>
  );
};

export default PricingOptions;