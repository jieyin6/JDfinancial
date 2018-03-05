<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <f-nav></f-nav>
  </div>
</template>

<script>
import mHeader from './components/m-header/m-header'
import fNav from './components/f-nav/f-nav'
export default {
  name: 'app',
  components: {
    fNav,
    mHeader
  }
}
</script>
