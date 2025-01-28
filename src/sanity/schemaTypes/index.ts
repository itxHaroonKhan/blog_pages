import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './Cord'
import { author } from './Auter'
import { back } from './Back'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost,author,back],
}
