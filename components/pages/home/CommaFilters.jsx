'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import AzCommaFilter from './CommaFilters/AZCommaFilter'
import clsx from 'clsx'
import MoreSeen from './CommaFilters/MoreSeen'
export default function CommaFilters() {
  const urlParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const params = new URLSearchParams(urlParams)
  const [commaFilter, setCommaFilter] = useState('az') // Imposta lo stato iniziale a 'false'
  useEffect(() => {
    const initialCatParam = params.get('commaFilter')
    setCommaFilter(initialCatParam)
  }, [])
  return (
    <>
      <div className="absolute left-[470px] top-[-100px]">
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
      <div className="absolute left-[570px] top-[-100px]">
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
