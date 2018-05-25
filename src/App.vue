<template lang="pug">

  #app
    Mainsearch
</template>

<script>
import Login from './components/Login.vue'
import Mainsearch from './components/Mainsearch.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Login: Login,
    Mainsearch: Mainsearch
  }
}
</script>

<style lang="scss">

@import './scss/main.scss';

#app{
  .logo__desktop{
    width: 25%;
    max-width: 350px;
  }
}

</style>
