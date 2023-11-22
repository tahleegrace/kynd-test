import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import MembersService, { Member } from '@/services/members'
import { StoreState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<StoreState>({
  state: {
    title: 'Welcome to the Front End Developer Test',
    showingMembers: false
  },
  getters: {
  },
  mutations: {
    SHOW_MEMBERS(state) {
      state.showingMembers = !state.showingMembers;
    }
  },
  actions: {
    async loadMembers({ commit }) {
      commit('SHOW_MEMBERS');
    }
  },
  modules: {
  }
})
