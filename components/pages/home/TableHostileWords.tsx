// import { getWords } from "@/utils/sanityFetch";
import { loadHostileWords } from '@/sanity/loader/loadQuery'
import Link from 'next/link'
import Categories from './Category'
import Image from 'next/image'
import CommaFilter from './CommaFilters'

type TableHostileWordsProps = {
  words: string[]
  fetchedCat: string[]
}

export default async function TableHostileWords({
  words,
  fetchedCat,
}: TableHostileWordsProps) {
  return (
    <main className="flex w-full justify-center">
      {/* <Image
          className="relative"
          src="a-z-filter.svg"
          alt="a-z-filter.svg"
          width={123}
          height={238}
        ></Image> */}

      <div className="relative z-10 mb-20 mt-40 flex max-h-[500px] min-h-[500px] min-w-[900px] max-w-[800px] rounded-[50px]">
        <CommaFilter />
        <div className="z-20 w-full rounded-l-[50px] border-[5px] border-r-0 border-[#9940F8] bg-blue-200 p-10">
          <h3 className="text-[24px] font-medium">
            Filtro per una o più categorie
          </h3>
          {/* filtro per categoria */}
          <Categories fetchedCat={fetchedCat} />
        </div>
        <div className="absolute left-[430px] top-[100px] z-20 h-0 w-0 border-b-[60px] border-r-[60px] border-t-[60px] border-b-transparent border-r-white border-t-transparent"></div>

        <div className="z-20 flex w-full flex-col items-center rounded-r-[50px] border-[5px] border-l-0 border-[#9940F8] bg-white px-10 pb-8">
          <div className="h-40"></div>
          <ul className="flex max-h-full flex-col overflow-auto">
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
