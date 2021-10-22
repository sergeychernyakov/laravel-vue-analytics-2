import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchProduct(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/order/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
