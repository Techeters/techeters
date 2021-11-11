export const getStory = async (app, url) => {
  return await app.$storyapi
    .get(`cdn/stories${url}`, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    })
    .then(res => {
      return res.data
    })
}
