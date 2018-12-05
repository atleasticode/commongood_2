import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

const state = {
  data: [],
  donor: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  }
};

const actions = {
  async fetchDonors({ commit }) {
    const res = await axios.get('http://localhost:3000/donors/all');
    commit(REQUEST_SUCCESS, res.data);
    console.log(res);
  }
};

export default {
  state,
  mutations,
  actions,
};
