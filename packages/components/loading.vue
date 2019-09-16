<template>
  <transition name="tloading-fade" v-if="show">
    <div
      :class="['loading-mask-wrapper',
        fullscreen ? 'loading-mask-wrapper-fixed' : 'loading-mask-wrapper-absolute']"
      :style="{ backgroundColor: `rgba(255, 255, 255, ${opacity / 10})` }"
    >
      <div class="loading-wrapper">
        <component :is="type"></component>
        <div v-if="titleShow" class="loading-wrapper-title">{{ title }}</div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ILoadFuns } from '../../types/index.d';
import tStretch from './stretch.vue';
import tDefault from './default.vue';

@Component({
  name: 'tLoading',
  components: {
    stretch: tStretch,
    default: tDefault,
  },
})
export default class TLoading extends Vue implements ILoadFuns {
  private show: boolean = false;

  private fullscreen: boolean = true;

  private type: string = 'stretch';

  private title: string = 'Loading';

  private titleShow: boolean = false;

  private opacity: number = 10;

  public toggle(v: boolean) {
    this.show = v;
  }

  destroyed() {
    const pNode: (Node & ParentNode) | null = this.$el.parentNode;
    if (pNode) pNode.removeChild(this.$el);
  }
}
</script>
