import Image from 'next/image';
import data from './data.json'

import Grok from './images/grok.png'

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  items-center ">
       <div className='flex flex-col items-center gap-4 mb-16'>
       <div className='flex gap-4 items-center mt-4'>
       <Image src={Grok} alt="Grok Finance" width={48} height={48} />
       <h1 className='font-bold text-xl'>Grok Finance Providers (by @truedant)</h1>
       </div>
         {Object.keys(data).length} providers
         </div>
      
<div className='grid grid-cols-6 w-full container gap-4'>
<div className='flex flex-col gap-4 items-center'>
  <img src="https://abs.twimg.com/grok-finance-cards/crypto/Vine/png/logo" width={200} height={200} />
  Vine
</div>
{Object.entries(data).map(([key, value]) => <div className='flex flex-col gap-4 items-center' key={key}>
  <img src={value} alt={key} width={200} height={200} />
  {key}
</div>)}
</div>
      
      </main>
     
    </div>
  );
}
