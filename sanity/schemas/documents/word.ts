import {defineType, defineField} from 'sanity'

export const hostileWord = defineType({
  name: 'hostileWord',
  title: 'Hostile Word',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the term, e.g., Immigrata (F) ~ Immigrato (M)',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug for the hostileWord page',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'LGBTQIA+', value: 'lgbtqia'},
          {title: 'Multiculturalità', value: 'multiculturalità'},
          {title: 'Salute', value: 'salute'},
          {title: 'Genere', value: 'genere'},
          {title: 'Età', value: 'età'},
          {title: 'Generale', value: 'generale'},
        ],
      },
    }),
    defineField({
      title: 'Level',
      name: 'level',
      type: 'number',
      options: {
        list: [
          {title: 'Livello 1', value: 1},
          {title: 'Livello 2', value: 2},
          {title: 'Livello 3', value: 3},
        ],
      },
    }),
    defineField({
      name: 'definition',
      title: 'Definition',
      type: 'text',
      description: 'The definition of the hostile word',
    }),
    defineField({
      name: 'relatedTerms',
      title: 'Related Terms',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Related terms',
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
      description: 'Number of times this word has been viewed',
    }),
  ],
})
