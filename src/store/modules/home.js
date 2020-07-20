import { NEWS_LIST } from '../store-types'
export default {
  state: {
    [NEWS_LIST]: [1, 2, 3]
  },
  getters: {
    getNewsResponse (state) {
      return state[NEWS_LIST]
    }
  },
  mutations: {
    [NEWS_LIST]: (state, res) => {
      state[NEWS_LIST] = res
    }
  },
  actions: {
    [NEWS_LIST]: async ({ commit }, params) => {
      const res = await params
      return commit(NEWS_LIST, res)
    }
  }
}
