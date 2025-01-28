'use client'

import Image from 'next/image';
import data from './data.json'

import { FixedSizeGrid as Grid } from "react-window";

import Grok from './images/grok.png'
import { useState } from 'react';

const ITEMS_PER_PAGE = 20;


export default function Home() {
  const [page, setPage] = useState(0);
  const totalItems = Object.entries(data).length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedData = Object.entries(data).slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  items-center mx-4">
        <div className='flex flex-col items-center gap-4 mb-16 '>
          <div className='flex gap-4 items-center mt-4 justify-center'>
            <Image src={Grok} alt="Grok Finance" width={48} height={48} />
            <h1 className='font-bold text-xl'>Grok Finance Providers (by @truedant)</h1>
          </div>
          {Object.keys(data).length} providers
        </div>

        <div className='grid md:grid-cols-6 grid-cols-3 w-full container gap-4'>

          {paginatedData.map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <Image src={value} alt={key} width={150} height={150} />
              <span>{key}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full max-w-md my-16">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span>
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </main>

    </div>
  );
}

