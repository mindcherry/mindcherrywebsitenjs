import { defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().min(8).max(120),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (Rule) => Rule.required().min(40).max(280),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alternative text' }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'content',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      group: 'meta',
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 2,
      group: 'meta',
      description:
        'Optional override for the meta description. If empty, the excerpt is used.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'Draft',
      media,
    }),
  },
  orderings: [
    { title: 'Published, newest first', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
    { title: 'Published, oldest first', name: 'publishedAsc', by: [{ field: 'publishedAt', direction: 'asc' }] },
  ],
})
