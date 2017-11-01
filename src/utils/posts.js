import enhanceCollection from "phenomic/lib/enhance-collection"

export const getPostsFromCollection = (
  collection,
  pagination,
  offset,
  filterFn
) => {
  return enhanceCollection(collection, {
    filter: filterFn,
    sort: "date",
    reverse: true
  }).slice(pagination, offset)
}

export const getPageNumber = page => (page ? parseInt(page, 10) : 0)
export const getPagination = (numberOfLatestPosts, pageNumber) =>
  numberOfLatestPosts * pageNumber
export const getOffset = (pagination, numberOfLatestPosts) =>
  pagination + numberOfLatestPosts
