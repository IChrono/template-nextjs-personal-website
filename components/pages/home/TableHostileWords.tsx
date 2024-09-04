// import { getWords } from "@/utils/sanityFetch";
import { loadHostileWords } from '@/sanity/loader/loadQuery'
import Link from 'next/link'
import Categories from './Category'
import Image from 'next/image'

type TableHostileWordsProps = {
  words: string[]
  fetchedCat: string[]
}

export default async function TableHostileWords({
  words,
  fetchedCat,
}: TableHostileWordsProps) {
  return (
    <main className="w-full flex justify-center ">
      <div className="relative left-[600px] top-[70px] z-0 transition-all transform duration-300 ease-in-out hover:-translate-y-2">
        <Image
          className="relative "
          src="a-z-filter.svg"
          alt="a-z-filter.svg"
          width={123}
          height={238}
        ></Image>
      </div>
      <div className="flex w-1/2 z-10 bg-white min-w-[800px] rounded-[50px] border-[5px] max-h-[500px] border-[#9940F8] mt-40 md:max-w-[25vw]">
        <div className="bg-[#EDEDED] p-10 rounded-l-[50px]">
          <h3 className="font-medium text-[24px] ">
            Filtro per una o più categorie
          </h3>
          {/* filtro per categoria */}
          <Categories fetchedCat={fetchedCat} />
        </div>

        <div className="w-full flex flex-col items-center px-10 pb-8">
          <div className="h-40"></div>
          <ul className="flex flex-col max-h-full overflow-auto    ">
            {words?.map((word: any) => (
              <Link
                key={word.currentSlug}
                className="font-bold text-2xl py-2"
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
