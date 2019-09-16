<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LoadType } from '../types/index.d';

@Component({
  components: {
  },
})
export default class App extends Vue {
  mounted() {
    this.$loading({
      fullscreen: true,
      type: 'default',
    });
  }
}
</script>

<style lang="scss">
</style>
