export default {
  state: {
    loading: 0,
  },
  reducers: {
    showLoading(state) {
      return {
        ...state,
        loading: state.loading + 1,
      }
    },
    hideLoading(state) {
      return {
        ...state,
        loading: state.loading - 1,
      }
    },
  },
}
