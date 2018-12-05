<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'buckets',
  created() {
    this.fetchBuckets();
  },
  computed: {
    ...mapState({
      buckets: state => state.buckets.data,
    }),
  },
  methods: {
    ...mapActions(['fetchBuckets']),
  },
};
</script>

<template lang="pug">
div
  img(alt="CommonGood logo" src="../assets/logo_small.png")
  h1 In the name of good – causes we support
  div(v-if="buckets.length")
    p We support a variety of causes – from education to health.
    div.buckets-list
      div.bucket(v-for="bucket in buckets")
        div {{bucket.bucketName}}
        div {{bucket._id}}
</template>

<style>
.buckets-list {
  display: flex;
  justify-content: center;
}

.bucket {
  margin: 30px;
  
}
</style>
