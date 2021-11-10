export const getStory = (context, url) => {
  return context.app.$storyapi
    .get(`cdn/stories${url}`, {
      version: 'draft',
    })
    .then(res => {
      return res.data
    })
}
