<template>
  <div id="app">
    <router-view/>
    <vnav></vnav>
  </div>
</template>

<script>
import nav from '../js/publice/nav'
export default {
  name: 'app',
  components: {
    vnav:nav
  }
}
</script>
