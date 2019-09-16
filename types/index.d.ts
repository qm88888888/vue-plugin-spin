import Vue from 'vue';

export interface ILoadOpts {
  fullscreen?: Boolean,
  loading?: Boolean,
  opacity?: number,
  target?: Element | string | null,
  type?: LoadType,
}

export interface ILoadFuns {
  toggle: Function,
}

export interface IDirective {
  show: Function,
  hide: Function,
  remove: Function,
}

export type LoadType = 'stretch' | 'default';

declare function install(vue: typeof Vue, options?: ILoadOpts): void

declare const _default: {
  install: typeof install
}
