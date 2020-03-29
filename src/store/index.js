import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({ url: user.datas.rute.url, data: user.datas, method: 'POST' })
              .then(resp => {
                  const token = resp.data.token
                  const user = resp.data.payload
                  localStorage.setItem('token', token)
                  axios.defaults.headers.common['authorization'] = token
                  commit('auth_success', token, user)
                  resolve(resp)
              })
              .catch(err => {
                  commit('auth_error')
                  localStorage.removeItem('token')
                  reject(err)
              })
      })
  },
  register({ commit }, user) {
      return new Promise((resolve, reject) => {
          axios({ url: user.datas.rute.url, data: user.datas, method: 'POST' })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  commit('auth_error', err)
                  localStorage.removeItem('token')
                  reject(err)
              })
      })
  },
  delete({ commit }, user) {
      return new Promise((resolve, reject) => {
          axios({ url: user.datas.rute.url, data: user.datas, method: 'DELETE' })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  commit('auth_error', err)
                  localStorage.removeItem('token')
                  reject(err)
              })
      })
  },
  update({ commit }, user) {
      return new Promise((resolve, reject) => {
          axios({ url: user.datas.rute.url, data: user.datas, method: 'PUT' })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  commit('auth_error', err)
                  localStorage.removeItem('token')
                  reject(err)
              })
      })
  },
  getDatas({ commit }, user) {
      return new Promise((resolve, reject) => {
          axios({ url: user.url, method: 'GET' })
              .then(resp => {
                  resolve(resp)
              })
              .catch(err => {
                  commit('auth_error', err)
                  localStorage.removeItem('token')
                  reject(err)
              })
      })
  },
  logout({ commit }) {
      return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
      })
  }
  },
  modules: {
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
  
})
