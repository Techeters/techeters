export const getLink = link => {
  if (!link) {
    return ''
  }
  if (
    link.cached_url === 'home' ||
    (link.cached_url === '' && link.url === '')
  ) {
    return '/'
  }
  return link.url === '' ? '/' + link.cached_url + '/' : link.url
}
