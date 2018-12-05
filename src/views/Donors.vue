<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'donors',
  created() {
    this.fetchDonors();
  },
  computed: {
    ...mapState({
      donors: state => state.donors.data,
    }),
  },
  methods: {
    ...mapActions(['fetchDonors']),
  },
};
</script>

<template lang="pug">
div
  img(alt="CommonGood logo" src="../assets/logo_small.png")
  h1 Good people, good projects
  div(v-if="donors.length")
    p These are the lovely people who make CommonGood possible:
    div.donors-list
      div.donor(v-for="donor in donors")
        div {{donor.donorName}}
        div Donation: {{donor.donation}} € 
        div {{donor._id}}
</template>

<style>
.donors-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.donor {
  margin: 30px;
  
}
</style>
