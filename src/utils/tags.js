export const getMainTag = tags =>
  Array.isArray(tags) && tags.length > 0 ? tags[0] : tags

export const getTagURL = tag => `/tag/${encodeURIComponent(tag)}`

export const normalizeTagForLabel = tag => {
  if (typeof tag !== 'string') {
    throw new TypeError(`Tag must be a string; ${typeof tag} given.`)
  }
  return tag.toUpperCase()
}
