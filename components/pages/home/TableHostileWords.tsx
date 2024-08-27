
// import { getWords } from "@/utils/sanityFetch";
import { loadHostileWords } from '@/sanity/loader/loadQuery'
import Link from 'next/link'
import Categories from './Category'

type TableHostileWordsProps = {
  words: string[]
}

export default async function TableHostileWords({
  words,
}: TableHostileWordsProps) {
  return (
    <main className="w-full flex justify-center">
      <div className="flex w-1/2 min-w-[800px]  rounded-[50px]  border-[5px]  border-[#9940F8] mt-40">
        <div className="bg-[#EDEDED] p-10 rounded-l-[50px]">
          <h3 className="font-medium text-[24px] ">
            Filtro per una o più categorie
          </h3>
          {/* filtro per categoria */}
          <Categories />
        </div>

        <div className="w-full flex flex-col items-center px-10">
          <div className="h-40"></div>
          <ul className="flex flex-col  ">
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

