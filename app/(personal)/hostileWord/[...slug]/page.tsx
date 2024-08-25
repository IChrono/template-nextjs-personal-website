import { loadWord } from '@/sanity/loader/loadQuery'
import clsx from 'clsx'

type params = { params: { slug: string } }

export default async function WordPage({ params }: params) {
  const slug = params.slug[0]
  console.log(slug)
  const { data } = await loadWord(slug)
  console.log(data)
  return (
    <div className="w-full flex flex-col items-center mt-36">
      <main className="md:max-w-[100%]">
        <h1 className="text-6xl font-extrabold">{data?.title}</h1>
        <section className="w-full px-20 mt-16 flex justify-between gap-72">
          <div className="ml-10">
            <h3 className="text-3xl font-bold text-[#B2B2B2] mb-3">
              Categoria: {data?.category}
            </h3>
            <Level wordLevel={data?.level ?? 4} />
          </div>
          <div className="mr-10">
            <h3 className="text-4xl mb-3 font-bold">Definizione</h3>
            <p className="text-xl max-w-[700px]">{data?.definition}</p>
          </div>
        </section>
      </main>
    </div>
  )
}

function Level({ wordLevel }: { wordLevel: number }) {
  const levels: JSX.Element[] = []
  const levelsString: string[] = [
    'Inclusivo',
    'Da usare con attenzione',
    'Ostile',
  ]
  console.log('wordlevel ' + wordLevel)
  for (let i = 0; i < levelsString.length; i++) {
    levels.push(
      <div key={i} className="flex items-center gap-2 py-1 ">
        <div
          className={clsx('w-5 h-5 border-2 min-w-5 rounded-full', {
            'bg-[#79BF21]': i === 0,
            'bg-[#F2AD00]': i === 1,
            'bg-[#A81640]': i === 2,
            'border-2 border-black': wordLevel === i + 1,
            'border-2 border-transparent': wordLevel !== i + 1,
          })}
        ></div>
        <p
          className={clsx('text-[#B2B2B2] min text-3xl', {
            'text-[#79BF21] font-bold': wordLevel === i + 1 && i === 0,
            'text-[#F2AD00] font-bold': wordLevel === i + 1 && i === 1,
            'text-[#A81640] font-bold': wordLevel === i + 1 && i === 2,
          })}
          key={i}
        >
          {levelsString[i]}
        </p>
      </div>,
    )
  }

  return <>{levels}</>
}
