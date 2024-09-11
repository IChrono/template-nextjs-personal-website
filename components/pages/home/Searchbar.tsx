'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
      console.log(params.get('query'))
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex w-full justify-center text-[30px] text-white md:w-full md:bg-search-gradient md:text-[40px]">
      <div className="mx-10 w-full rounded-full bg-search-gradient md:bg-none">
        <label htmlFor="search" className="">
          {' '}
        </label>
        <input
          className="w-full bg-transparent px-7 placeholder:text-white focus:outline-none"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
    </div>
  )
}
