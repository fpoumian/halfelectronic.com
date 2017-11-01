export const mapResponseToBooks = response =>
  response.GoodreadsResponse.reviews[0].review.map(function(item) {
    return item.book[0]
  })
