
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import Link from './assets/components/NavBar/Link'
import NavBar from './assets/components/NavBar/NavBar'
import PricingOptions from './assets/components/PricingOptions/PricingOptions'


const pricingPromise = fetch("pricingData.json").then(res => res.json());

function App() {


  return (
    <>
    <header>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </main>
      
      <h1 className='text-2xl font-bold text-amber-600'>Md. Mizanur Rahman</h1>

    </>
  )
}

export default App
