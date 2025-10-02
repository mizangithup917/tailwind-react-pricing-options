import React, { use } from 'react';
import PricinCard from '../PricingCard/PricinCard';

const PricingOptions = ({pricingPromise}) => {

const pricingData = use(pricingPromise);
 

  return (
    <div>
        <h2>Get our Membership</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {
            pricingData.map(pricing => <PricinCard 
              key={pricing.id}
              pricing={pricing}></PricinCard>)
          }
        </div>
    </div>
  );
};

export default PricingOptions;