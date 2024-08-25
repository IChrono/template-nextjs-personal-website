// import { getWords } from "@/utils/sanityFetch";
import { loadHostileWords } from '@/sanity/loader/loadQuery'
import Link from 'next/link'

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

function Categories() {
  const categorieFetchate: string[] = [
    'Tutte le categorie',
    'LGBTQIA+',
    'Multiculturalità',
    'Salute',
    'Genere',
    'Età',
    'Generale',
  ]

  return (
    <div
      className="w-full
              bg-[#EDEDED] p-4 relative
                after:content-[''] after:absolute after:top-[50px] after:right-[-40px]
                 
                after:border-t-[20px] after:border-t-transparent
                after:border-b-[20px] after:border-b-transparent
                after:border-r-[25px] after:border-r-white
                "
    >
      <ul className="pt-2">
        {categorieFetchate.map((cat: string) => (
          <li key={cat} className=" my-1 flex items-center">
            <div className="flex items-center bg-white p-2 rounded-[6px]">
              <input
                type="checkbox"
                id={`${cat}`}
                name="category"
                value={`${cat}`}
                className=" w-6 h-6 appearance-none rounded-full border-2 border-gray-300 checked:bg-[#9940F8] checked:border-transparent focus:outline-none"
              />
              <label className="ml-3 text-xl " htmlFor={`${cat}`}>
                {cat}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
