import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage, loadHostileWords } from '@/sanity/loader/loadQuery'
import HomePage from '@/components/pages/home/HomePage'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

interface SearchParams {
  query?: string
  page?: string
}

export default async function IndexRoute({
  searchParams,
}: { searchParams?: SearchParams } = {}) {
  const initial = await loadHomePage()

  console.log('Questi sono i query params ' + searchParams?.query)
  const query = searchParams?.query
  let words
  try {
    words = await loadHostileWords(query || '')
    console.log(words)
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

  return <HomePage data={initial.data} words={words?.data} />
}
