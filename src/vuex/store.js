import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import {mutations} from './actions'

Vue.use(Vuex)

const state = {
  uid: 'someone'
}
console.log(mutations)
console.log(...mutations)
export default new Vuex.Store({
  state,
  mutations,
  getters
})
