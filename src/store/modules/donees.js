import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

const state = {
  data: [],
  donee: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  }
};

const actions = {
  async fetchDonees({ commit }) {
    const res = await axios.get('http://localhost:3000/donees/all');
    commit(REQUEST_SUCCESS, res.data);
    console.log(res);
  }
};

export default {
  state,
  mutations,
  actions,
};
