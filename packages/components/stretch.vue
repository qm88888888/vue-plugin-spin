<template>
  <div class="stretch-wrapper">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'tStretch',
})
export default class TStretch extends Vue {}
</script>

<style lang="scss">
.stretch-wrapper {
  width: 40px;
  height: 32px;
  margin: 0 auto;
  span {
    display: inline-block;
    margin-left: 2px;
    width: 5px;
    height: 20px;
    border-radius: 4px;
    background: $primary-color;
    animation: stretch-load 1s ease infinite;
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
    &:nth-child(4) {
      animation-delay: 0.6s;
    }
    &:nth-child(5) {
      animation-delay: 0.8s;
    }
  }
  @keyframes stretch-load {
    0%, 100% {
      height: 20px;
      background: $alter-color;
    }
    50% {
      height: 38px;
      margin: -8px 0px -8px 2px;
      background: $primary-color;
    }
  }
}
</style>
