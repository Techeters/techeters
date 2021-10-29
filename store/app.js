export const state = () => ({
  loading: false,
  loaded: false,
  isWebp: false,
  isPopupOpen: false,
})

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },
  setLoaded(state, value) {
    state.loaded = value
  },
  setIsWebp(state, value) {
    state.isWebp = value
  },
  setPopup(state, value) {
    state.isPopupOpen = value
  },
}
