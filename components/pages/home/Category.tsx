'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

type CategoriesProp = {
  fetchedCat: string[]
  commaFilter: string
}

export default function Categories({
  fetchedCat,
  commaFilter,
}: CategoriesProp) {
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
    <div className="relative w-full bg-blue-200 p-2">
      <ul className="flex flex-wrap gap-2 pt-2">
        {fetchedCat?.map((cat: string) => (
          <li key={cat} className="my-1 flex items-center">
            <div className="flex items-center rounded-[6px] border-[2px] border-black bg-white p-2">
              <input
                type="checkbox"
                id={`${cat}`}
                name="category"
                value={`${cat}`}
                checked={categories.includes(cat)}
                className={`h-6 w-6 appearance-none rounded-full border-2 border-gray-300 checked:border-black ${commaFilter === 'az' ? 'checked:bg-[#9940F8]' : 'checked:bg-[#F534D0]'} focus:outline-none`}
                onChange={(e) => handleSetCategory(e)}
              />
              <label className="text-l ml-3 md:text-xl" htmlFor={`${cat}`}>
                {cat}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
