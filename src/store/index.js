import Vue from 'vue';
import Vuex from 'vuex';

import donors from './modules/donors';
import donees from './modules/donees';
import buckets from './modules/buckets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    donors,
    donees,
    buckets
  },
});
