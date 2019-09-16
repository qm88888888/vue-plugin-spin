<template>
  <div class="default-wrapper"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

export default class TDefault extends Vue {}
</script>

<style lang="scss">
.default-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  &:before, &:after {
    content: '';
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-color: $primary-color;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: default-load 2.0s infinite ease-in-out;
  }
  &:after {
    animation-delay: -1.0s;
  }
  @keyframes default-load {
    0%, 100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
}
</style>
