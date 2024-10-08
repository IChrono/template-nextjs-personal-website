import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

export const getHostileWords = groq`*[_type == "hostileWord" && title match ("*" + $searchParams + "*")]{
  title,
  "currentSlug": slug.current
}`

export const getHostileWordsWithCategories = groq`*[_type == "hostileWord" 
  && title match ("*" + $searchParams + "*") 
  && category in $categoryParams]
  {
    title,
    "currentSlug": slug.current
  }`

export const getCategories = groq`*[_type == "hostileWord"] { category }`

export const getWord = groq`*[_type == "hostileWord" && slug.current == $slug][0]{
  title,
  category,
  level,
  definition
}`
