'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import AzCommaFilter from './CommaFilters/AZCommaFilter'
import clsx from 'clsx'
import MoreSeen from './CommaFilters/MoreSeen'

type CommaFiltersProps = {
  commaFilter: string
  setCommaFilter: (filter: string) => void
}

export default function CommaFilters({
  commaFilter,
  setCommaFilter,
}: CommaFiltersProps) {
  const urlParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const params = new URLSearchParams(urlParams)

  useEffect(() => {
    const initialCatParams = params.get('commaFilter')
    if (initialCatParams === null) {
      params.set('commaFilter', 'az')
    }
    setCommaFilter(params?.get('commaFilter') || 'az')

    router.replace(`${pathname}?${params}`, { scroll: false })
  }, [])

  return (
    <>
      <div className="absolute right-12 top-[-100px]">
        <div
          onClick={() => {
            params.delete('commaFilter')
            setCommaFilter('az')
            params.set('commaFilter', 'az')
            router.replace(`${pathname}?${params}`, { scroll: false })
          }}
          className={clsx('duration-1 transform transition-all ease-in-out', {
            'hover:none relative z-30 -translate-y-[25px]':
              commaFilter === 'az',
            'z-0 hover:-translate-y-2': commaFilter !== 'az',
          })}
        >
          <AzCommaFilter commaFilter={commaFilter} />
        </div>
      </div>
      <div className="absolute right-36 top-[-100px]">
        <div
          onClick={() => {
            params.delete('commaFilter')
            setCommaFilter('moreSeen')

            params.set('commaFilter', 'moreSeen')
            router.replace(`${pathname}?${params}`, { scroll: false })
          }}
          className={clsx('duration-1 transform transition-all ease-in-out', {
            'hover:none relative z-30 -translate-y-[25px]':
              commaFilter === 'moreSeen',
            'z-0 hover:-translate-y-2': commaFilter !== 'moreSeen',
          })}
        >
          <MoreSeen commaFilter={commaFilter} />
        </div>
      </div>
    </>
  )
}
