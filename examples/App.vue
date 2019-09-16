<template>
  <div id="app" v-spin.fullscreen.default="loading">
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
  private loading: boolean = true;
  // mounted() {
  //   this.$loading({
  //     fullscreen: true,
  //     type: 'default',
  //   });
  // }
}
</script>

<style lang="scss">
</style>
