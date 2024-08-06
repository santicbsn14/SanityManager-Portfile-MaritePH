import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'photo',
    title: 'Imagen',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'imageFile',
        title: 'Imagen',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'project',
        title: 'Proyecto',
        type: 'reference',
        to: [{type: 'projects'}],
      }),
      defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
      }),
      defineField({
        name: 'imageDatetime',
        title: 'Fecha de toma',
        type: 'datetime',
      }),
      defineField({
        name: 'measures',
        title: 'Medidas',
        type: 'string',
      }),
      defineField({
        name: 'status',
        title: 'Estado',
        type: 'boolean',
      }),
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'imgPort',
      },
      prepare(selection) {
        const {author} = selection
        return {...selection, subtitle: author && `by ${author}`}
      },
    },
  })
  