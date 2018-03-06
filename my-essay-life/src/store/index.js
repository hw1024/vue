import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import common_config from './modules/common_config';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    common_config,
  },
  getters
});

export default store
