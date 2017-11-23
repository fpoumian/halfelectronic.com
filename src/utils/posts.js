import isBefore from 'date-fns/is_before'

export const sortPostsByDate = posts =>
  posts.sort((prevPost, currentPost) =>
    isBefore(prevPost.date, currentPost.date)
  )
