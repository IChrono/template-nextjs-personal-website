'use client'

// import { getWords } from "@/utils/sanityFetch";
import { loadHostileWords } from '@/sanity/loader/loadQuery'
import Link from 'next/link'
import Categories from './Category'
import Image from 'next/image'
import CommaFilter from './CommaFilters'
import clsx from 'clsx'
import { useState } from 'react'

type TableHostileWordsProps = {
  words: string[]
  fetchedCat: string[]
}

export default function TableHostileWords({
  words,
  fetchedCat,
}: TableHostileWordsProps) {
  const [commaFilter, setCommaFilter] = useState('')

  return (
    <main className="max-fit flex w-full justify-center">
      {/* <Image
          className="relative"
          src="a-z-filter.svg"
          alt="a-z-filter.svg"
          width={123}
          height={238}
        ></Image> */}

      <div className="relative z-10 mb-32 mt-40 flex max-h-[100px] max-w-[800px] flex-col rounded-[50px] shadow-2xl shadow-gray-400 sm:max-h-[500px] lg:min-h-[500px] lg:min-w-[900px] lg:flex-row">
        <CommaFilter
          commaFilter={commaFilter}
          setCommaFilter={setCommaFilter}
        />
        <div
          className={clsx(
            'z-20 w-full bg-blue-200 p-10 lg:rounded-l-[50px] lg:border-[5px] lg:border-b-[5px] lg:border-r-0',
            { 'border-[#9940F8]': commaFilter === 'az' },
            { 'border-[#F534D0]': commaFilter === 'moreSeen' },
          )}
        >
          <h3 className="pt-12 text-[18px] font-medium md:text-[20px] lg:text-[24px]">
            Filtro per una
            <br className="sm:hidden" /> o più categorie
          </h3>
          {/* filtro per categoria */}
          <Categories fetchedCat={fetchedCat} commaFilter={commaFilter} />
        </div>
        <div className="absolute left-[430px] top-[100px] z-20 hidden h-0 w-0 border-b-[60px] border-r-[60px] border-t-[60px] border-b-transparent border-r-white border-t-transparent lg:block"></div>

        <div
          className={clsx(
            'z-20 flex h-[300px] w-full flex-col items-center rounded-r-[50px] bg-white px-10 py-10 pb-8 md:h-full lg:border-[5px] lg:border-l-0',
            { 'border-[#9940F8]': commaFilter === 'az' },
            { 'border-[#F534D0]': commaFilter === 'moreSeen' },
          )}
        >
          <ul className="flex flex-col overflow-auto sm:max-h-full lg:mt-32">
            {words?.map((word: any) => (
              <Link
                key={word.currentSlug}
                className="py-2 text-2xl font-bold"
                href={`/hostileWord/${word.currentSlug}`}
              >
                {word.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
  // top 10
  // Ordinamento da a-z
}
