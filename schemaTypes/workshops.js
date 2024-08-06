import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'workshops',
    title: 'Talleres',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Descripcion',
        type: 'string',
      }),      
      defineField({
        name: 'levels',
        title: 'Niveles',
        type: 'array',
        of: [{type: 'string'}],
      }),
      defineField({
        name: 'requirements',
        title: 'Requisitos',
        type: 'string',
      }),
      defineField({
        name: 'price',
        title: 'Precio',
        type: 'number',
      }),
      defineField({
        name: 'instructor',
        title: 'Instructor/a',
        type: 'string',
      }),
      defineField({
        name: 'spaceAvaliable',
        title: 'Cupos Disponibles',
        type: 'number',
      }),
      defineField({
        name: 'workshopStartDate',
        title: 'Fecha de Inicio',
        type: 'datetime',
      }),
      defineField({
        name: 'workshopEndDate',
        title: 'Fecha de finalizacion',
        type: 'datetime',
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