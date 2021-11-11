export const getStory = async (app, url) => {
  return await app.$storyapi
    .get(`cdn/stories${url}`, {
      version: 'draft',
    })
    .then(res => {
      return res.data
    })
}
