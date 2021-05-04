import { createStore } from 'vuex'

export default createStore({
  state: {
    fullName: 'Bohdan Savchuk',
    age: 29,
    avatar: require('../assets/logo.png'),
    avatarShow: true,
    products: [
      { name: "Keyboard", price: 44},
      { name: "Mouse", price: 20},
      { name: "Monitor", price: 399},
      { name: "Dell XPS", price: 599},
      { name: "MacBook Pro", price: 899},
      { name: "Pencil Box", price: 6},
      { name: "Pen", price: 2},
      { name: "USB Cable", price: 7},
      { name: "Eraser", price: 2},
      { name: "Highlighter Hiliter", price: 5}
    ]
  },
  mutations: {
    changeAvatar: (state) => {
      state.avatarShow = !state.avatarShow;
    }
  },
  actions: {
    toggleAvatar({commit}) {
      commit('changeAvatar')
    }
  },
  getters: {
    fullNameState (state) {
      return state.fullName;
    },
    ageState(state) {
      return state.age;
    },
    avatarState(state) {
      return state.avatar;
    },
    avatarShowState(state) {
      return state.avatarShow;
    },
    productsState(state) {
      return state.products;
    }
  }
})
