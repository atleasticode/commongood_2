import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

const state = {
  data: [],
  bucket: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  }
};

const actions = {
  async fetchBuckets({ commit }) {
    const res = await axios.get('http://localhost:3000/buckets/all');
    commit(REQUEST_SUCCESS, res.data);
    console.log(res);
  }
};

export default {
  state,
  mutations,
  actions,
};