<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">About CommonGood</router-link> |
      <router-link to="/donors">Give back to your community</router-link> |
      <router-link to="/donees">Make a wish</router-link> |
      <router-link to="/buckets">Causes we support</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f78e27;
}
</style>
