export const setUser = async ({ commit }, userinfo) => {
        commit('SET_USER', userinfo)
}
export const setUser2 = async function({ commit }) {
  // 不能用es6的function 简写方式，会获取不到axios
  const ip = await this.$axios.$get('/logout')
  console.log(ip);
  commit('SET_IP', ip)
}
// export const  setUser2 = async function({ commit, }, { $axios }) {
//   const ip = await $axios.$get('http://icanhazip.com')
//   commit('SET_USER', ip)
// }
// export default function ({ $axios, redirect }) {
