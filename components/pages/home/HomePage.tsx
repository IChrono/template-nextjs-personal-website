

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { Header } from '@/components/shared/Header'

import type { HomePagePayload } from '@/types'

import SearchBar from './Searchbar'
import TableHostileWords from './TableHostileWords'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
  words: string[]
}
export function HomePage({ data, encodeDataAttribute, words }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      <SearchBar placeholder=" Cerca..." />
      <TableHostileWords words={words} />
    </div>
  )
}

export default HomePage
