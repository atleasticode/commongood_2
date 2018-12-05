<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'donees',
  created() {
    this.fetchDonees();
  },
  computed: {
    ...mapState({
      donees: state => state.donees.data,
    }),
  },
  methods: {
    ...mapActions(['fetchDonees']),
  },
};
</script>

<template lang="pug">
div
  img(alt="CommonGood logo" src="../assets/logo_small.png")
  h1 Dream big – and go home?
  div(v-if="donees.length")
    p Sometimes you have a great idea but lack the resources to go through with it. 
    p No worries, we've been there. That's why we bring people together who want to make a difference.
    h2 Want to know more? Look at our donees and find out more about their projects.
    div.donees-list
      div.donee(v-for="donee in donees")
        div {{donee.doneeName}}
        div {{donee._id}}
        div {{donee.wish}}
        
</template>

<style>
.donees-list {
  display: flex;
  justify-content: center;
}

.donee {
  margin: 30px;
  
}
</style>
