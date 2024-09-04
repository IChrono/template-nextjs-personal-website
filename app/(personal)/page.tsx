import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { studioUrl } from '@/sanity/lib/api'
import {
  loadCategory,
  loadHomePage,
  loadHostileWords,
  loadHostileWordsWithCategories,
} from '@/sanity/loader/loadQuery'
import HomePage from '@/components/pages/home/HomePage'
import { Category } from '@/types'
import Categories from '@/components/pages/home/Category'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

interface SearchParams {
  query?: string
  cat?: string
  page?: string
}

export default async function IndexRoute({
  searchParams,
}: { searchParams?: SearchParams } = {}) {
  let words
  let fetchedCat
  let categories: string[]
  let uniqueCat

  const initial = await loadHomePage()

  const query = searchParams?.query || ''

  const catQuery =
    searchParams?.cat
      ?.split(' ')
      .map((item) => item.trim()) // Rimuove eventuali spazi bianchi extra
      .filter((item) => item.length > 0) || []

  try {
    fetchedCat = await loadCategory()
  } catch (error) {
    console.error('Failed to load Categories: ', error)
    fetchedCat = { data: null }
  }

  categories = fetchedCat.data.map((item: Category) => item.category)
  uniqueCat = [...new Set(categories)]

  try {
    if (catQuery.length > 0) {
      words = await loadHostileWordsWithCategories(query, catQuery)
    } else if (query !== '') {
      words = await loadHostileWords(query)
    } else {
      words = ''
    }
  } catch (error) {
    console.error('Failed to load hostile words:', error)
    words = { data: null }
  }

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/structure/home`} className="underline">
          create one now
        </Link>
      </div>
    )
  }

  return (
    <HomePage data={initial.data} words={words?.data} fetchedCat={uniqueCat} />
  )
}
