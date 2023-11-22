import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import MembersService, { Member } from '@/services/members'
import { StoreState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<StoreState>({
  state: {
    title: 'Welcome to the Front End Developer Test',
    showingMembers: false,
    visibleMembers: []
  },
  getters: {
  },
  mutations: {
    SHOW_MEMBERS(state) {
      state.showingMembers = true;
    },

    SET_VISIBLE_MEMBERS(state, members) {
      state.visibleMembers = members;
    }
  },
  actions: {
    async loadMembers({ commit }) {
      const members = await MembersService.loadMembers();

      commit('SET_VISIBLE_MEMBERS', members);
      commit('SHOW_MEMBERS');
    }
  },
  modules: {
  }
})
