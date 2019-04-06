<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Outline msg="Welcome to Your Vue.js App"/>
    <Outline msg="two?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Outline from '@/components/Outline.vue'

export default {
  name: 'home',
  components: {
    Outline
  }
}
</script>
