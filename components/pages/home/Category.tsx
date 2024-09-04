'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

type CategoriesProp = {
  fetchedCat: string[]
}

export default function Categories({ fetchedCat }: CategoriesProp) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const params = new URLSearchParams(searchParams)
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const catParams =
      searchParams
        .get('cat')
        ?.split(' ')
        .map((item) => item.trim()) // Rimuove eventuali spazi bianchi extra
        .filter((item) => item.length > 0) || []

    console.log(catParams)
    setCategories(catParams)
  }, [])

  function handleSetCategory(e) {
    const { value, checked } = e.target
    const newValues = checked
      ? [...categories, value]
      : categories.filter((cat) => cat != value)
    setCategories(newValues)
    if (newValues.length === 0) {
      params.delete('cat')
    } else {
      params.set('cat', newValues.join(' '))
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="w-full bg-[#EDEDED] p-2 relative after:content-[''] after:absolute after:top-[50px] after:right-[-40px] after:border-t-[20px] after:border-t-transparent after:border-b-[20px] after:border-b-transparent after:border-r-[25px] after:border-r-white">
      <ul className="pt-2 flex flex-wrap gap-2">
        {fetchedCat?.map((cat: string) => (
          <li key={cat} className="my-1 flex items-center">
            <div className="flex items-center bg-white p-2 rounded-[6px] border-[3px] border-[#9940F8]">
              <input
                type="checkbox"
                id={`${cat}`}
                name="category"
                value={`${cat}`}
                checked={categories.includes(cat)}
                className="w-6 h-6 appearance-none rounded-full border-2 border-gray-300 checked:bg-[#9940F8] checked:border-transparent focus:outline-none"
                onChange={(e) => handleSetCategory(e)}
              />
              <label className="ml-3 text-xl" htmlFor={`${cat}`}>
                {cat}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
