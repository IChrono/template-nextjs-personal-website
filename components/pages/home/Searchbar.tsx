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
    replace(`${pathname}?${params.toString()}`, {scroll:false})
  }

  return (
    <div className="text-white flex justify-center bg-search-gradient w-full text-[24px] md:text-[40px]">
      <label htmlFor="search " className="">
        {' '}
        |
      </label>
      <input
        className="bg-transparent focus:outline-none placeholder:text-white"
        placeholder={placeholder}
        onChange={(e) => {handleSearch(e.target.value)}}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}
