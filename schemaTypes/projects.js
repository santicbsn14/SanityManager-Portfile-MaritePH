import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Proyectos',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
      }),
      defineField({
        name: 'imagefiles',
        title: 'Carrete de imágenes',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'photo' }] }],
        options: {
          hotspot: true,
        },
      }),      
      defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
      }),
      defineField({
        name: 'projectYear',
        title: 'Fecha de Inicio',
        type: 'datetime',
        description:'Que año comenzo el proyecto?'
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